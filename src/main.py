import streamlit as st
import pandas as pd
import numpy as np
import pydeck as pdk

dataset1 = pd.read_csv("https://docs.google.com/spreadsheets/d/1DTZ5nlmPV9cmvRaVVYoHBsqVr7uluwNwfFcDus8igoU/export?format=csv&gid=0")
dataset2 = pd.read_csv("https://docs.google.com/spreadsheets/d/1taLvZ7Z5QhKL7glDc3V8zoSEUJqC45l36xPndy1edhc/export?format=csv&gid=0")
dataset3 = pd.read_csv("https://docs.google.com/spreadsheets/d/1F2nxhot_k3b80pPoHxitYKjc_n-K9SFkSsft2n7M-EQ/export?format=csv&gid=0")
dataset = pd.concat([dataset1, dataset2, dataset3], axis=1)
st.title('HouseSafe')

st.metric(label="Número de encuestas", value=dataset.shape[0])
st.dataframe(dataset)

cantidad = dataset[["AreaV","Cedula"]]
cantidad2 = cantidad.groupby(["AreaV"]).count()
cantidad2.Cedula.astype(float)
cantidad2.columns = ['Cantidad']

st.header('Casas o apartementos por área')
st.bar_chart(cantidad2)

cantidad3 = dataset[["NumeroPisos","Cedula"]]
cantidad4 = cantidad3.groupby(["NumeroPisos"]).count()
cantidad4.Cedula.astype(float)
cantidad4.columns = ['Cantidad']

st.header('Número de pisos')
st.bar_chart(cantidad4)
mean_df = cantidad4['Cantidad'].mean()
with st.expander("Ver más..."):
     st.write("""
         El promedio de pisos en las casas o apartementos 
         encuestados es de {mean_df}
     """.format(mean_df = mean_df))

st.title("Mapa de encuestados")

df = dataset1[["lat", "lon"]]

new_lat = df["lat"].str.split('.', n=6, expand=True)
new_lat.columns = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6']
new_lat_2 = new_lat['i3'].str.split('', n=3, expand=True)
new_lat_2.columns = ['i1', 'i2', 'i3', 'i4']
new_lat['i2'] = new_lat['i2'].str.cat(new_lat_2['i2'], sep="")
df["lat"]= new_lat["i1"].str.cat(new_lat['i2'], sep =".")

new_lon = df["lon"].str.split('.', n=6, expand=True)
new_lon.columns = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6']
new_lon_1 = new_lon['i3'].str.split('', n=3, expand=True)
new_lon_1.columns = ['i1', 'i2', 'i3', 'i4']
new_lon["i4"]= new_lon_1["i2"].str.cat(new_lon_1['i3'], sep ="")
new_lon_2 = new_lon['i2'].str.split('', n=2, expand=True)
new_lon_2.columns = ['i1', 'i2', 'i3']
new_lon["i3"]= new_lon_2["i3"].str.cat(new_lon['i4'], sep ="")
new_lon["i1"]= new_lon["i1"].str.cat(new_lon_2['i2'], sep ="")
df["lon"]= new_lon["i1"].str.cat(new_lon['i3'], sep =".")


df = pd.DataFrame(df.astype(float),
     columns=['lat', 'lon'])

mindpoint = [np.average(df['lat']), np.average(df['lon'])]
#st.map(df)

st.pydeck_chart(pdk.Deck(
     map_style='mapbox://styles/mapbox/light-v9',
     initial_view_state=pdk.ViewState(
         latitude=mindpoint[0],
         longitude=mindpoint[1],
         zoom=12,
         pitch=50,
     ),
     layers=[
         pdk.Layer(
            'HexagonLayer',
            data=df,
            get_position='[lon, lat]',
            radius=20,
            elevation_scale=400,
            elevation_range=[0, 1000],
            pickable=True,
            extruded=True,
         ),
         pdk.Layer(
             'ScatterplotLayer',
             data=df,
             get_position='[lon, lat]',
             get_color='[200, 30, 0, 160]',
             get_radius=80,
         ),
     ],
 ))
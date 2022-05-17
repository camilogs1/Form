from multiprocessing.sharedctypes import Value
from operator import ne
from os import sep
import streamlit as st
import pandas as pd
import numpy as np
import pydeck as pdk

dataset1 = pd.read_csv("https://docs.google.com/spreadsheets/d/1DTZ5nlmPV9cmvRaVVYoHBsqVr7uluwNwfFcDus8igoU/export?format=csv&gid=0")
dataset1 = dataset1.rename(columns={'Puntaje':'Puntaje1'})
dataset2 = pd.read_csv("https://docs.google.com/spreadsheets/d/1taLvZ7Z5QhKL7glDc3V8zoSEUJqC45l36xPndy1edhc/export?format=csv&gid=0")
dataset2 = dataset2.rename(columns={'Puntaje':'Puntaje2'})
dataset3 = pd.read_csv("https://docs.google.com/spreadsheets/d/1F2nxhot_k3b80pPoHxitYKjc_n-K9SFkSsft2n7M-EQ/export?format=csv&gid=0")
dataset3 = dataset3.rename(columns={'Puntaje':'Puntaje3'})

dataset = pd.concat([dataset1, dataset2, dataset3], axis=1)
col_list = ['Puntaje1', 'Puntaje2', 'Puntaje3']
dataset['score'] = dataset[col_list].sum(axis=1)
dataset = dataset.drop(col_list, axis=1)
dataset["Porcentaje"] = round(((dataset["score"]*100)/60), 3)
dataset["Escala"] = np.where(dataset["Porcentaje"] <= 30, 'Baja', 
         (np.where((dataset["Porcentaje"]>=31) & (dataset["Porcentaje"]<=60), 'Media',
         (np.where((dataset["Porcentaje"] >= 61) & (dataset["Porcentaje"]<=80), 'Alta', 'Extrema')))))


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

cantidad3 = dataset[["Municipio","Cedula"]]
cantidad4 = cantidad3.groupby(["Municipio"]).count()
cantidad4.Cedula.astype(float)
cantidad4.columns = ['Cantidad']

st.header('Municipios')
st.bar_chart(cantidad4)
suma = cantidad4.sum()
mayor = cantidad4.max()
porcentaje = round(mayor/suma, 2)

with st.expander("Ver más..."):
     
     st.metric(label="Municipio con mayor participación", value=mayor.item(), delta=porcentaje.item())

st.title("Mapa de encuestados")

df = dataset1[["lat", "lon"]]

new_lon = df["lon"].str.split('.', n=6, expand=True)
new_lon.columns = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6']
new_lon['i1'] = new_lon['i1'].str.cat(new_lon['i2'], sep="")
new_lon['i1'] = new_lon['i1'].str.cat(new_lon['i3'], sep="")
new_lon['i1'] = new_lon['i1'].str.cat(new_lon['i4'], sep="")
new_lon_2 = new_lon['i1'].str.split('', n=8, expand=True)
new_lon_2.columns = ['i1', 'i2', 'i3', "i4", 'i5', 'i6', 'i7', "i8", "i9"]
new_lon['i1'] = new_lon_2['i2'].str.cat(new_lon_2['i3'], sep="")
new_lon['i1'] = new_lon['i1'].str.cat(new_lon_2['i4'], sep="")
new_lon['i2'] = new_lon_2['i5'].str.cat(new_lon_2['i6'], sep="")
new_lon['i2'] = new_lon['i2'].str.cat(new_lon_2['i7'], sep="")
new_lon['i2'] = new_lon['i2'].str.cat(new_lon_2['i8'], sep="")
df["lon"]= new_lon["i1"].str.cat(new_lon['i2'], sep =".")

new_lat = df["lat"].str.split('.', n=6, expand=True)
new_lat.columns = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6']
new_lat['i1'] = new_lat['i1'].str.cat(new_lat['i2'], sep="")
new_lat['i1'] = new_lat['i1'].str.cat(new_lat['i3'], sep="")
new_lat['i1'] = new_lat['i1'].str.cat(new_lat['i4'], sep="")
new_lat_2 = new_lat['i1'].str.split('', n=8, expand=True)
new_lat_2.columns = ['i1', 'i2', 'i3', "i4", 'i5', 'i6', 'i7', "i8", "i9"]
new_lat['i1'] = new_lat_2["i2"]
new_lat['i2'] = new_lat_2['i3'].str.cat(new_lat_2['i4'], sep="")
new_lat['i2'] = new_lat['i2'].str.cat(new_lat_2['i5'], sep="")
new_lat['i2'] = new_lat['i2'].str.cat(new_lat_2['i6'], sep="")
df["lat"]= new_lat["i1"].str.cat(new_lat['i2'], sep =".")

df = pd.DataFrame(df.astype(float),
     columns=['lat', 'lon'])

# df = pd.DataFrame(
#     np.random.randn(10, 2) / [50, 50] + [6.25, -75.58],
#     columns=['lat', 'lon'])

# st.dataframe(df)

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
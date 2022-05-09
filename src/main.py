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

df = pd.DataFrame(
    np.random.randn(10, 2) / [50, 50] + [6.25, -75.58],
    columns=['lat', 'lon'])

st.pydeck_chart(pdk.Deck(
     map_style='mapbox://styles/mapbox/light-v9',
     initial_view_state=pdk.ViewState(
         latitude=6.25,
         longitude=-75.58,
         zoom=11,
         pitch=40,
     ),
     layers=[
         pdk.Layer(
            'HexagonLayer',
            data=df,
            get_position='[lon, lat]',
            radius=20,
            elevation_scale=20,
            elevation_range=[9, 10],
            pickable=False,
            extruded=False,
         ),
         pdk.Layer(
             'ScatterplotLayer',
             data=df,
             get_position='[lon, lat]',
             get_color='[200, 30, 0, 160]',
             get_radius=200,
         ),
     ],
 ))
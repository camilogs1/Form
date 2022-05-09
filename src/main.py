import streamlit as st
import pandas as pd
import numpy as np
import pydeck as pdk

dataset = pd.read_csv("https://docs.google.com/spreadsheets/d/1F2nxhot_k3b80pPoHxitYKjc_n-K9SFkSsft2n7M-EQ/export?format=csv&gid=0")

st.title('HouseSafe')

st.metric(label="Encuestas", value=dataset.shape[0])
st.dataframe(dataset)

df = pd.DataFrame(
    np.random.randn(10, 2) / [50, 50] + [6.25, -75.58],
    columns=['lat', 'lon'])

st.pydeck_chart(pdk.Deck(
     map_style='mapbox://styles/mapbox/light-v9',
     initial_view_state=pdk.ViewState(
         latitude=6.25,
         longitude=-75.58,
         zoom=11,
         pitch=50,
     ),
     layers=[
         pdk.Layer(
            'HexagonLayer',
            data=df,
            get_position='[lon, lat]',
            radius=10,
            elevation_scale=9,
            elevation_range=[0, 10],
            pickable=True,
            extruded=True,
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
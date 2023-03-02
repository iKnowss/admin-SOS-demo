import React, { useEffect, useState, useRef } from 'react'
import {
    MapContainer, TileLayer, useMap,
} from 'react-leaflet'
import tileLayer from './tileLayer'

import SOSmarker from './SOSmarker'

import 'leaflet/dist/leaflet.css';


function Map() {

    return (
        <MapContainer center={[13.901741919367524, 100.53263742284973]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                {...tileLayer}
            />
            <SOSmarker />
        </MapContainer>
    )
}

export default Map

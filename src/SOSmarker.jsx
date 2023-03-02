import React, { useEffect, useState, useRef } from 'react'
import {
    Marker, Popup
} from 'react-leaflet'

import 'leaflet/dist/leaflet.css';

// ! Mqtt
import Paho from "paho-mqtt";
const HOST = "broker.hivemq.com";
const PORT = Number(8000);
const TOPIC = 'APP/SOS/Tracking/Test';
const CLIENT_ID = `mqtt-async-test-${parseInt(Math.random() * 100)}`

const Client = new Paho.Client(
    HOST,
    PORT,
    CLIENT_ID,
);

Client.connect({
    onSuccess: () => {
        console.log('Connected to MQTT broker');
        Client.subscribe(TOPIC); // replace with your MQTT topic to subscribe to
    },
    onFailure: (err) => {
        console.error('Failed to connect to MQTT broker:', err);
    },
});


// ! marker
function SOSmarker() {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    // Set callback functions
    Client.onConnectionLost = onConnectionLost;
    Client.onMessageArrived = onMessageArrived;

    // Define callback function for when the connection is lost
    function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
            console.log("Connection lost: " + responseObject.errorMessage);
        }
    }

    // Define callback function for handling incoming messages
    function onMessageArrived(message) {
        console.log("Received message: " + message.payloadString);
        const data = JSON.parse(message.payloadString);
        setLatitude(data.Position.coords.latitude);
        setLongitude(data.Position.coords.longitude);
        console.log(data.location.coords.latitude);
    }

    return latitude != null && longitude != null ? (
        <Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    ) : (
        <></>
    )
}

export default SOSmarker
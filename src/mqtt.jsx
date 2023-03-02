// import Paho from "paho-mqtt";

// const HOST = "broker.hivemq.com";
// const PORT = Number(8000);
// const TOPIC = 'APP/SOS/Tracking/Test';
// const CLIENT_ID = `mqtt-async-test-${parseInt(Math.random() * 100)}`

// const Client = new Paho.Client(
//     HOST,
//     PORT,
//     CLIENT_ID,
// );

// // Set callback functions
// Client.onConnectionLost = onConnectionLost;
// Client.onMessageArrived = onMessageArrived;

// Client.connect({
//     onSuccess: () => {
//         console.log('Connected to MQTT broker');
//         Client.subscribe(TOPIC); // replace with your MQTT topic to subscribe to
//     },
//     onFailure: (err) => {
//         console.error('Failed to connect to MQTT broker:', err);
//     },
// });

// // Define callback function for when the connection is lost
// function onConnectionLost(responseObject) {
//     if (responseObject.errorCode !== 0) {
//         console.log("Connection lost: " + responseObject.errorMessage);
//     }
// }

// // Define callback function for handling incoming messages
// function onMessageArrived(message) {
//     console.log("Received message: " + message.payloadString);
// }

// export default Client;
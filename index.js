// api/websocket.js
const WebSocket = require('ws');

module.exports = async (req, res) => {
  const ws = new WebSocket('wss://websocket.magelearning.academy');  // Replace with your WebSocket server URL
  
  ws.on('open', function open() {
    console.log('WebSocket connected');
    ws.send('Hello from Vercel Serverless Function!');
  });

  ws.on('message', function incoming(data) {
    console.log('Received from WebSocket server:', data);
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
    res.status(200).send('WebSocket connection closed');
  });

  ws.on('error', (error) => {
    console.log('Error occurred:', error);
    res.status(500).send('WebSocket connection error');
  });
  
  // Since Vercel is serverless, the response is typically sent before the WebSocket interaction completes.
  // So, we just return a success message
  res.status(200).send('WebSocket client function executed');
};

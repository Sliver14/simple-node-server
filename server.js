// Import Express
const express = require('express');

// Create an Express application
const app = express();

// Set the port number where the server will run
const port = 3000;

// Define a route that sends a response when you visit the root URL
app.get('/', (req, res) => {
  res.send('Hello, world! This is a simple Node.js server.');
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

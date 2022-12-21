const express = require('express');
const soap = require('soap');

// Replace this with the URL of the WSDL file for the SOAP service you are using
const wsdlUrl = 'http://example.com/wsdl';

// Create an Express.js app
const app = express();

// Create a client for the SOAP service
soap.createClient(wsdlUrl, function(err, client) {
  if (err) {
    console.error(err);
    return;
  }

  // Create a route that makes a SOAP request to the API and returns the response
  app.get('/data', function(req, res) {
    client.getData(function(err, result) {
      if (err) {
        console.error(err);
        res.sendStatus(500);
        return;
      }

      res.send(result);
    });
  });
});

// Start the server
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});

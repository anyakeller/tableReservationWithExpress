// Dependencies
// =============================================================
var express = require('express');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var reservations = [
  {
    name: 'Poo',
    email: 'poo@poo.poo',
    phone: 100100100,
    uid: 123
  }
];

var waitlist = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'main.html'));
});

app.get('/view', function(req, res) {
  res.sendFile(path.join(__dirname, 'viewTables.html'));
});

app.get('/add', function(req, res) {
  res.sendFile(path.join(__dirname, 'makeReservation.html'));
});

app.get('/resList', function(req, res) {
  res.json(reservations);
});
app.post('/resList', function(req, res) {
  if (reservations.length < 5) {
    reservations.push(req.body);
    res.send(true);
  } else {
    res.send(false);
  }
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});

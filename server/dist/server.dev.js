"use strict";

var cors = require('cors');

var express = require('express');

var mongoose = require('mongoose');

require('dotenv').config();

var app = express();

var cookieParser = require('cookie-parser');

var path = require('path');

app.use(express.json()); //app.use(express.static('public'))

app.use(express["static"](path.join(__dirname, 'public'))); // app.use(express.static(path.join(process.cwd(), 'public')))
//app.use('public', express.static(path.join(__dirname,'public')));

console.log(process.cwd());
app.use(cors({
  // Use this in production (DO NOT PUT FINAL SLASH!!) //
  origin: ["http://localhost:8080/api/prodotti"],
  methods: ["POST", "GET", "PUT", "PATCH"],
  credentials: true
}));
app.use(cookieParser());
mongoose.connect(process.env.MONGODB_URI).then(function () {
  app.listen(process.env.PORT, function () {
    return console.log("Connected to DB and Listening on port ".concat(process.env.PORT));
  });
})["catch"](function (error) {
  console.log(error);
});

var prodottiRoutes = require('./routes/prodottiRoutes'); //const usersRoutes = require('./routes/users');
//const bookingsRoutes = require('./routes/bookings');
// const imagesRoutes = require('./routes/images');


app.use(prodottiRoutes); //app.use(usersRoutes)
//app.use(bookingsRoutes)
// app.use(imagesRoutes)

app.use('/api/prodotti', prodottiRoutes); //app.use('/api/users', usersRoutes)
//app.use('/api/bookings', bookingsRoutes)
//// app.use('/api/images', imagesRoutes)
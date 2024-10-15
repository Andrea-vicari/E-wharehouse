"use strict";

var cors = require('cors');

var express = require('express');

var mongoose = require('mongoose');

require('dotenv').config();

var app = express();

var cookieParser = require('cookie-parser');

var multer = require('multer');

var path = require('path');

app.use(express.json()); //app.use(express.static('public'))

app.use(express["static"](path.join(__dirname, 'public'))); // app.use(express.static(path.join(process.cwd(), 'public')))
// app.use('public', express.static(path.join(__dirname,'public')));

console.log(process.cwd());
app.use(cors({
  // Use this in production (DO NOT PUT FINAL SLASH!!) //
  // Important!!: Do not forget allowedHeaders
  origin: ["http://localhost:5174"],
  methods: ["POST", "GET", "PUT", "PATCH"],
  credentials: true,
  allowedHeaders: ['Content-Type'] // Specify allowed headers

}));
app.use(cookieParser());
mongoose.connect(process.env.MONGODB_URI).then(function () {
  app.listen(process.env.PORT, function () {
    return console.log("Connected to DB and Listening on port ".concat(process.env.PORT));
  });
})["catch"](function (error) {
  console.log(error);
}); // Configure multer storage

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function filename(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});
var upload = multer({
  storage: storage
});
app.post('/upload', upload.single('file'), function (req, res) {
  console.log(req.file);
}); //app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

var prodottiRoutes = require('./routes/prodottiRoutes');

var usersRoutes = require('./routes/users'); //const bookingsRoutes = require('./routes/bookings');


var imagesRoutes = require('./routes/imagesRoutes');

app.use(prodottiRoutes);
app.use(usersRoutes); //app.use(bookingsRoutes)

app.use(imagesRoutes);
app.use('/api/prodotti', prodottiRoutes);
app.use('/api/users', usersRoutes); //app.use('/api/bookings', bookingsRoutes)

app.use('/api/images', imagesRoutes);
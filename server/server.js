const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')
require ('dotenv').config();
const app = express();
const cookieParser = require('cookie-parser')
const path = require('path');



app.use(express.json());

//app.use(express.static('public'))
// app.use(express.static(path.join(process.cwd(), 'public')))
// app.use('public', express.static(path.join(__dirname,'public')));


app.use(express.static(path.join(__dirname, 'public')));

console.log(process.cwd())

app.use(cors(
    {
        // Use this in production (DO NOT PUT FINAL SLASH!!) //
        // Important!!: Do not forget allowedHeaders
        origin: ["http://localhost:5173"],
        methods: ["POST", "GET", "PUT", "PATCH"],
        credentials: true,
        allowedHeaders: ['Content-Type'], // Specify allowed headers
        
    }
));

app.use(cookieParser())

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => console.log(`Connected to DB and Listening on port ${process.env.PORT}`));
    })
    .catch((error)=>{
        console.log(error)
    })




const prodottiRoutes = require('./routes/prodottiRoutes');
const usersRoutes = require('./routes/users');
const imagesRoutes = require('./routes/imagesRoutes');

app.use(prodottiRoutes)
app.use(usersRoutes)
app.use(imagesRoutes)

app.use('/api/prodotti', prodottiRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/images', imagesRoutes)


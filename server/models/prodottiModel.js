const mongoose = require('mongoose')

const prodottiSchema = new mongoose.Schema({

    nome:{
        type: String,
        required: true
    }
    ,
    categoria:{
        type: String,
        required: true
    },
    tipologia:{
        type: String,
        required: true
    },
    descrizione:{
        type: String,
        required: false
    },
    peso:{
        type: Number,
        required: true
    },
    scaffale:{
        type: String,
        required: true
    },
    campata:{
        type: Number,
        required: true
    },
    ripiano:{
        type: Number,
        required: true
    },
    cassetta:{
        type: Number,
        required: false
    }

},{ timestamps:true })


module.exports = mongoose.model("prodottiModel", prodottiSchema);
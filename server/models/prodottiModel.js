const mongoose = require('mongoose')

const prodottiSchema = new mongoose.Schema({

    nome:{
        type: String,
        required: false
    },
    categoria:{
        type: String,
        required: false
    },
    tipologia:{
        type: String,
        required: false
    },
    descrizione:{
        type: String,
        required: false
    },
    codice:{
    type: Number,
    required: false
    },
    condizione:{
    type: String,
    required: false
    },
    peso:{
        type: Number,
        required: false
    },
    scaffale:{
        type: String,
        required: false
    },
    campata:{
        type: Number,
        required: false
    },
    ripiano:{
        type: Number,
        required: false
    },
    cassetta:{
        type: Number,
        required: false
    },
    marca:{
        type: String,
        required: false
    },
    modello:{
        type: String,
        required: false
    },
    versione:{
        type: String,
        required: false
    },
    annoImmatricolazione:{
        type: Number,
        required: false
    },
    immagine:{
        type: String,
        required: false,
        default: "file_1715325537969.png"
    }

},{ timestamps:true })


module.exports = mongoose.model("prodottiModel", prodottiSchema);
const mongoose = require('mongoose')

const prodottiSchema = new mongoose.Schema({


    nome:{
        type: String,
        required: true
    }


},{ timestamps:true })


module.exports = mongoose.model("prodottiModel", prodottiSchema);
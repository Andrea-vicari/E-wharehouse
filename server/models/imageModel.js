const mongoose = require('mongoose')

const imagesSchema = new mongoose.Schema({

    image:{
        data: Buffer, contentType: String
    },

},{ timestamps:true })


module.exports = mongoose.model("ImageModel", imagesSchema);

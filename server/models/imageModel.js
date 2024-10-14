const mongoose = require('mongoose')

const imagesSchema = new mongoose.Schema({

    filename:{
        type:String,
        required:false,
        data: Buffer
    },
    filepath:{
        type:String,
        required:false
    }

},{ timestamps:true })


module.exports = mongoose.model("ImageModel", imagesSchema);

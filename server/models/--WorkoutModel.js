const mongoose = require('mongoose')

const workoutsSchema = new mongoose.Schema({
    today:{
        type: String,
        required: false
    },
    user:{
        type: String,
        required: false
    },
    title:{
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required: true
    },
    rest:{
        type: Number,
        required: true
    },
    series:{
        type: Number,
        required: true
    },
    loads:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        default:"OPEN",
        required: false
    },
    dataChiusura:{
        type: String,
        required: false
    },

    registered:{
        type: Array,
        default:[],
        required: false
    }


},{ timestamps:true })


module.exports = mongoose.model("WorkoutModel", workoutsSchema);

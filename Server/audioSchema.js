const mongoose = require('mongoose');

const audio = new mongoose.Schema({
    url:{
        type:String
    },
    size:{
        type:Number
    },
    type:{
        type:String
    }
})

module.exports = mongoose.model('audio',audio)
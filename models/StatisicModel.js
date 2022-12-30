const { Double } = require('mongodb')
const mongoose = require('mongoose')

const statisticTemplate = new mongoose.Schema({
    NameP1:{
        type: String
    },
    NameP2:{
        type: String
    },
    PointListP1:{
        type: [Number]
    },
    PointListP2:{
        type: [Number]
    },
    Date:{
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('StatisticModel', statisticTemplate)
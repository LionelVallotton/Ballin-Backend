const { Double } = require('mongodb')
const mongoose = require('mongoose')

const statisticTemplate = new mongoose.Schema({
    GamePoints:{
        type: Number
    },
    Rounds:{
        type: Number
    },
    HomePoints:{
        type: Number
    },
    HomeAverage:{
        type: Number
    },
    AwayPoints:{
        type: Number
    },
    AwayAverage:{
        type: Number
    },
    date:{
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('StatisticModel', statisticTemplate)
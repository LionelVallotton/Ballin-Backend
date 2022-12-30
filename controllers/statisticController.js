const StatisticModelRepo = require('../models/statisicModel')
const dispatcher = require('express').Router()


exports.findAll = async (req, res) => {
    // using .find() without a parameter will match on all user instances
    // Todo: try without
    StatisticModelRepo.find((err, allStatistics) => {
        if (err) {
            res.status(500).send("database error")
        }
        else {
            res.status(200).json(allStatistics)
        }
    })
}

exports.create = async (request, response) => {

    const newStatistic = new StatisticModelRepo({
        NameP1: request.body.statistic.nameP1,
        NameP2: request.body.statistic.nameP2,
        PointListP1: request.body.statistic.pointListP1,
        PointListP2: request.body.statistic.pointListP2
    })

    newStatistic.save((err, statisticCreated) => {
        if (err) {
            response.status(412).send("Precodition failed")
        }
        else {
            response.status(201).json(statisticCreated)
        }
    })
}

exports.delete = async (request, response) => {
    StatisticModelRepo.findByIdAndDelete(request.params.id, (err, statistic) =>{
        if (err){
            response.status(404).send('Statistic not found')
        }
        else {
            response.status(204).json('Deleted ' + statistic)
        }
    })
}
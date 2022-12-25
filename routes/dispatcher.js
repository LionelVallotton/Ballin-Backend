const dispatcher = require('express').Router();
const statisticController = require('../controllers/statisticController');



dispatcher.route('/')
    .get(statisticController.findAll)
    .post(statisticController.create);

dispatcher.route('/:id')
    .put()
    .delete(statisticController.delete);


module.exports = dispatcher;
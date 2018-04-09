var express = require('express')
var Game = require('./model');
var app = express.Router();

var game = new Game();

module.exports = app
    .get('/quote', (req, res) => res.send(game.GetQuotes()))
    .get('/state', (req, res) => res.send(game))
    .post('/picture', (req, res) => res.send(game.FlipPicture()))
    //only invoked if we use GET verb
    //2 parameters, 1 function. Uses the response object and sends to the client?
    //returning the result of the function.

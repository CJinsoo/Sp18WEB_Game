var express = require('express')
var Game = require('./model');
var app = express.Router();

var game = new Game(); 
 
module.exports = app
    .get('/quote', (req, res) => {
        res.send(game.GetQuotes(req.query.playerId))
        
    })
    .get('/state', (req, res) => res.send(game))
    .post('/picture', (req, res) => res.send(game.FlipPicture()))
    .post('/quote', (req, res) => {//server side game object has SubmitQuote()
        console.log(req.body);//initially the req.body is empty
        if(req.body.PlayerId != req.body.DealerId){
            game.SubmitQuote(req.body.Text, req.body.PlayerId)//have two fields now
            console.log('running SubmitQuote')
            console.log(req.body.PlayerId)
        }
            //res.send(game.FlipPicture())
        res.send({success: true});
        //on the server's terminal, it is undefined 
        if(req.body.PlayerId == req.body.DealerId){
            game.ChooseQuote(req.body.Text) 
            console.log('running ChooseQuote')
        }
           
    })
    /*.post('/quote', (req, res) => {
        
        res.send({success: true});
    })*/
    //only invoked if we use GET verb
    //2 parameters, 1 function. Uses the response object and sends to the client?
    //returning the result of the function.

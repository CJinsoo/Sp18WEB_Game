/*
const flatten = require('array-flatten');

var myArr = [
    ["Hello", "world"],
    ["Good bye", "New Paltz"]
];

var arr2 = flatten(myArr);

console.log(myArr);
console.log(arr2);
*/

/*const http = require('http');

//create a server object:
const server = http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
});

server.listen(8080); //the server object listens on port 8080

console.log("Listening on http://localhost:8080");
*/
//express helps with routing. 
var express = require('express')
var app = express()

const servername = "localhost";
const port = 8080;

const simple = require('./simpleController');
// respond with "hello world" when a GET request is made to the homepage
//doesn't handle everything. only handles ones with exact path with"/""
app.use('/simple', simple).listen(port);

console.log("running on http://" + servername + ":" + port)

//sending message back and forth
/*
app
    .use(function(req, res, next){
        res.write('This is provided by newpaltz.edu\r\n')
        next();
    })
    .get('/hello', function (req, res) {
        res.send('World');//can't call send twice because it closes server.
        res.end();
    })
    .get('/goodbye', function (req, res) {//.push .patch ...
        res.write('New Paltz');//res.send()
        res.end();
    }).listen(8080);
*/
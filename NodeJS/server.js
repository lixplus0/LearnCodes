const express = require('express');
const expressStatic = require('express-static');
const bodyparser = require('body-parser');


var server = express();

server.listen(8080);

// server.use(bodyparser.urlencoded({
//     extended: false,
//     limit: 2 * 1024 * 1024
// }));

server.use('/', function (req, res,next) {
    console.log('a');
    next();
});

server.use('/', function (req, res, next) {
    console.log('b');
});
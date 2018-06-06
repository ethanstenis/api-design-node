// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
import express from 'express';
var app = express();

var jsonData = {count: 12, message: 'hey'};

import { readFile } from 'fs';

app.get('/', function(req, res){
    readFile('index.html', function(err, buffer){
    var html = buffer.toString();
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
    });
});

app.get('/data', function(req, res){
    res.json(jsonData);
});

var port = 3000;
app.listen(port, function(){
    console.log('listening on http://localhost:', port);
});
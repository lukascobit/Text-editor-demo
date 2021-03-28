const http = require('http');
const fs = require('fs');
const path = require('path')
const express = require('express');
const app = express();

const myModule = require('./script.js');

var name = myModule.textvalue;

console.log(name)

import { first } from './first.js'


fs.readFile(__dirname +'/index.html', (err, html) => {
    if (err) {
        throw err; 
    }       
    http.createServer((req, res) => {  
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);
        console.log(html)
        res.end();
    }).listen(3000);
});

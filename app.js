const express = require('express');
const cors = require('cors'); 
const config= require('./config.js')
const routes= require('./routes.js')
const app= exprees();
//config
app.set('port', config.port);
//middlewares
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json({limit: '25mb'}));
app.options('*',(req, res)=>{
    resizeTo.sendStatus(200);

});
//routes
app.use(routes);
module.exports = app;
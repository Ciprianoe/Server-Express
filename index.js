const express = require('express');
const morgan = require('morgan');
const server = express();
const routes = require('./route');
const routeApi = require('./routes-api');
//setting
server.set('ServerExpress','Mi primer Server');
//no tan solo sirve para crear uina variable que sirv de nombre del servidor u otracosa el objetivo principal es para gestioar los motores de plantillas html como EJS
server.set('views',__dirname +'/views');

server.set('view engine', 'EJS');




//end setting

//middleware
server.use(morgan('dev','tiny'));
//end middleware

/*
// routing estas se pueden trabajar en script separad
server.get('/',(req,res)=>{
    //res.setHeader('Content-Type','text/plain');
  //  res.writeHead(200,{'Content-Type':'text/plain'});
    res.render('index.ejs');

});

server.get('/about',(req,res)=>{
    res.end('About!!!');
});

server.get('/login',(req,res)=>{
    res.render('login.ejs');
});

server.get('*',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.end('404 NOT FOUND!!!');
});
// end routing
*/
// estoy usando el routing desde otro script el cual require aca en este de la siguiente forma no se puede pasar con un simple require debe ser a traves de un middleware

server.use(routes);
server.use('/api',routeApi);
server.get('*',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.end('404 NOT FOUND!!!');
});

server.listen(3000,()=>{
  console.log('Server On Port 3000');
  console.log(server.get('ServerExpress'));
});

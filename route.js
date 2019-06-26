const express = require('express');
const router =  express.Router();

router.get('/',(req,res)=>{
    res.render('index.ejs');

});

router.get('/about',(req,res)=>{
    res.end('About!!!');
});

router.get('/login',(req,res)=>{
    res.render('login.ejs');
});


// para poder utilizar el metodo router debemos exportarlo de la siguiente forma

module.exports = router;

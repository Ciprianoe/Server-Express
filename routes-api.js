const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.json({
    miprimerApi: 'Works!!!'
  });
});
// para poder utilizar el metodo router debemos exportarlo de la siguiente forma

module.exports = router;

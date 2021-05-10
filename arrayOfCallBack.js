var express = require('express');

var app = express();

var india = function( req, res, next) {

    console.log('india');
    next();
}

var england = function( req, res, next) {

    console.log('england');
    next();
}


app.get('/exam/d', [india,england], function(req, res, next){
        res.send('The Next() function will move you to the next callBack function');
        next();
    }, function( req, res, next){
        res.send('Hello Sir, I am D !!');
 });

 app.listen(3000, function(){
     console.log('Example is recieving port number 3000');
 })
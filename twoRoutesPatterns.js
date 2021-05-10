var express = require('express');

var app = express();

//Using Get Method

app.get('/', function(req , res) {

    res.send('Examination of AWAMAD');
});

app.get('/ab?cd', function(req, res){

    res.send('String Pattern 1: ab?cd');
});


app.get('/ab+cd', function(req, res){

    res.send('String Pattern 2: ab+cd');
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});

var express = require('express');
var app = express();

app.set('view engine', 'pug');
 
app.use(express.static('css'));

app.get('/', function(req, res){
    res.render('index')
});

app.listen(3000, function(err){
    if(err) return console.log("Error"), process.exit(1);
    console.log('Listening on port 3000');
});
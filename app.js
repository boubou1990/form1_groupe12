var express = require('express');
var app = express();
//var routes = require('./routes/index');
var path = require('path');
var bodyParser = require('body-parser');
var levelup = require ('level');
var path = levelup ("/tmp/db");
var db = require('../build/default/leveldb.node').db,
var new_db =new db ('users');

//qui fera reference à routes, donc index.js
//app.use('/', routes);

// view engine setup
//tout est par défaut dans 'index' donc, on n'appelle que 'views'
app.set('views', path.join(__dirname, '/views/'));
//app.set('views', path.join(__dirname, '/views/form'));
app.set('view engine', 'jade');

app.use (bodyParser.json());
app.use (bodyParser.urlencoded ({extended:true}));

app.get('/', function(req, res) {
  res.render('form');
});



 /* POST contact page (submit). Ces valeurs seront transmises dans la base de données*/
 app.post('/', function(req, res) {
  new_db.users.put  ({
username: req.body.username,
password: req.body.password,
lastname: req.body.lastname,
email: req.body.email
   })
//  res.json (req.body.username + req.body.password+ req.body.lastname+req.body.email);
});
//res.json (utilisateur ajouté);
//Nous avons la réponse en JSon

// });

var server = app.listen(3000,'127.0.0.1', function(req, res){

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
});

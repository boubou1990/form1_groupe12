 express = require 'express'
 bodyParser = require 'body-parser'
 stylus = require 'stylus'
 nib = require 'nib'
# cookieParser = require 'cookie-parser'
 methodOverride = require 'method-override'
#session = require 'express-session'
#errorhandler = require 'errorhandler'
#dojo = require 'connect-dojo'
 coffee = require 'connect-coffee-script'
# serve_favicon = require 'serve-favicon'
# serve_index = require 'serve-index'
# serve_static = require 'serve-static'
 db = require './db'

 app = express()

 app.set 'views', __dirname + 'public'
 app.set 'view engine', 'jade'
# app.use serve_favicon "#{__dirname}/../public/favicon.ico"
 app.use bodyParser.json()
 app.use bodyParser.urlencoded()
# app.use cookieParser 'toto'
 app.use methodOverride '_method'
# app.use session secret: 'toto', resave: true, saveUninitialized: true

 app.use coffee
  src: "#{__dirname}/../views"
  dest: "#{__dirname}/../public"
  bare: true


#qui fera reference à routes, donc index.js
#app.use '/', routes;

 app.get '/', (req, res, next) ->
   res.render 'form'

 app.post '/',(req, res,next) ->
#  console.log(req.body);      // your JSON
  res.json
  username: req.body.Username
  password: req.body.password    # echo the result back

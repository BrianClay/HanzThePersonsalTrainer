/**
 * Created by brian.clay on 3/17/14.
 */
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
//var services = require("./routes/services")
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'app'));
app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);
//app.use(express.favicon());
app.use(express.morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'app')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
//app.get('/services/getRewards',services.getAllRewards);
//app.get('/services/getChildren',services.getAllChildren);
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});


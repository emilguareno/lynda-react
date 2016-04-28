var express = require('express');
var _ = require('underscore');
var path = require('path');
var app = express();

var connections = [];
var title = 'Untitled Presentation';
var audience = [];
var speaker = {};

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  socket.once('disconnect', function(){
    var member = _.findWhere(audience, {id: this.id});
    if(member){
      audience.splice(audience.indexOf(member), 1);
      io.sockets.emit('audience', audience);
    }
    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log('Disconnected: %s sockets remaining.', connections.length);
  });
  socket.on('join', function(payload){
    var newMember = {
      id: this.id,
      name: payload.name,
      type: 'member'
    };
    this.emit('joined', newMember);
    audience.push(newMember);
    io.sockets.emit('audience', audience);
  });
  socket.on('start', function(payload){
    speaker.name = payload.name;
    speaker.id = this.id;
    speaker.type = 'speaker';
    title = payload.title;
    this.emit('joined', speaker);
    io.sockets.emit('start', {title: title, speaker: speaker.name});
  });
  socket.emit('welcome', {
    title: title,
    audience: audience,
    speaker: speaker.name
  });
  connections.push(socket);
  console.log('Connected %s sockets connected', connections.length);
});

console.log('Running server on port 3000');
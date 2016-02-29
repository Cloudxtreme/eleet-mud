var express = require('express');
var app = express();

app.use(express.static('public'));

var port = 8081;

app.listen(port, function(){
  console.log('listening at ' + port);
});

app.get('/*',function(req, res){
  res.sendFile('public/index.html', { root: __dirname });
});

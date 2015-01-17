var restify = require('restify');

var server = restify.createServer();

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = require ('./Route_server');
var router = require ('./Route_route');

server.start(router.route);
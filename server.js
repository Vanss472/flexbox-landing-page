var auth = require('http-auth');
var basic = auth.basic({
    realm: "wright", // change this to your client / project name
    file: __dirname + "/password" // gevorg:gpass, Sarah:testpass ...
});

var express = require('express');
var server = express();

server.use(auth.connect(basic));

server.use('/', express.static('./dist')); // change this if your app requires a different structure
server.listen(process.env.PORT || 3000);


console.log('Server started: http://localhost:' + (process.env.PORT || 3000));
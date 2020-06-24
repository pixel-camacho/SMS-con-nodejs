const app = require('./server');
const http = require('http');

const server = http.createServer(app);
require('./database');
require('./socket').conn(server);

server.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'));
});
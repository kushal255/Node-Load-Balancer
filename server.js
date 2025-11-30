const http = require('http');
const roundRobin = require('./roundRobin');
const serverConfig = require('./config.json').servers;

const servers = serverConfig.map(s => ({ ...s }));

const server = http.createServer((req, res) => {
    return roundRobin(servers, req, res);
});

server.listen(3000, () => {
    console.log('Round Robin Load Balancer running on port 3000');
});

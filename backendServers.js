const http = require('http');
const serverConfig = require('./config.json').servers;

const createServer = (host, port, timeout = 0) => {
    http.createServer((req, res) => {
        setTimeout(() => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(`Server response from port: ${port}`);
        }, timeout);
    }).listen(port, host, () => {
        console.log(`Server running at http://${host}:${port} (delay ${timeout}ms)`);
    });
};

serverConfig.forEach(s => createServer(s.host, s.port, s.timeout));

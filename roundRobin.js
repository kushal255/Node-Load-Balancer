const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});
let index = 0;

module.exports = (servers, req, res) => {
    const target = servers[index];
    index = (index + 1) % servers.length;

    proxy.web(req, res, {
        target: `http://${target.host}:${target.port}`
    }, () => {
        res.writeHead(500);
        res.end('Round Robin: Server error');
    });
};

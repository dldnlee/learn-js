
const server = require('live-server');

const params = {
  host: 'losthost',
  port: 3000,
  open: false,
  root: './client'
}

server.start(params);
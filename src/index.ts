import express from 'express';
import http from 'http';

import config from './config';

const app = express();
const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server running at ${config.CLIENT_URL}`);
});

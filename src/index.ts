import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});

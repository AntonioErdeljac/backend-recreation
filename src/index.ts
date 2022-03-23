import 'dotenv/config';

import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import config from './config';
import routes from './routes';

const app = express();

app.use(
  cors({
    credentials: true,
    origin: config.CLIENT_URL,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server running at ${config.CLIENT_URL}`);
});

app.use('/', routes());

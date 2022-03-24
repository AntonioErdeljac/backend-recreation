import * as express from 'express';

import { authentication, rooms } from './api';

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  rooms(router);

  return router;
};

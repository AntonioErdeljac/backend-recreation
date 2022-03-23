import * as express from 'express';

import { authentication } from './api';

const router = express.Router();

export default (): express.Router => {
  authentication(router);

  return router;
};

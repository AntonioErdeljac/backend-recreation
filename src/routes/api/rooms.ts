import * as express from 'express';

import { rooms } from '../../controllers';
import { paths } from '../../constants';
import { checkSession } from '../../middlewares';

export default (router: express.Router): void => {
  router.post(paths.ROOMS, checkSession(), rooms.create);
};

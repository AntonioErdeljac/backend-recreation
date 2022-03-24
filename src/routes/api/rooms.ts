import * as express from 'express';

import { rooms } from '../../controllers';
import { paths } from '../../constants';
import { checkSession } from '../../middlewares';

export default (router: express.Router): void => {
  router.post(paths.ROOMS, checkSession(), rooms.create);
  router.get(paths.ROOMS, checkSession(), rooms.get);
  router.delete(paths.ROOMS_ID, checkSession(), rooms.deleteById);
  router.put(paths.ROOMS_ID, checkSession(), rooms.updateById);
};

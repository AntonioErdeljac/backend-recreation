import * as express from 'express';

import { rooms } from '../../controllers';
import { paths } from '../../constants';

export default (router: express.Router): void => {
  router.post(paths.ROOMS, rooms.create);
};

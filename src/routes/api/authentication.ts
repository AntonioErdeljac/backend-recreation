import * as express from 'express';

import { paths } from '../../constants';

export default (router: express.Router): void => {
  router.get(paths.AUTHENTICATION_REGISTRATION, () => console.log('HIT!'));
};

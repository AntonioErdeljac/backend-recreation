import * as express from 'express';

import { authentication } from '../../controllers';
import { paths } from '../../constants';

export default (router: express.Router): void => {
  router.post(paths.AUTHENTICATION_REGISTRATION, authentication.register);
  router.post(paths.AUTHENTICATION_LOGIN, authentication.login);
};

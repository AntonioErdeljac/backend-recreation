import * as express from 'express';
import { merge } from 'lodash';

import db from '../db';
import { cookies } from '../constants';

export default () =>
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<express.Response | void> => {
    try {
      const sessionToken = req.cookies[cookies.AUTHENTICATION];

      if (!sessionToken) {
        return res.status(403).json({ message: 'Not Authenticated' }).end();
      }

      const existingUser = await db.Users.methods.getBySessionToken(sessionToken).lean();

      if (!existingUser) {
        return res.status(403).json({ message: 'Not Authenticated' }).end();
      }

      merge(req, { identity: existingUser });

      return next();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400).end();
    }
  };

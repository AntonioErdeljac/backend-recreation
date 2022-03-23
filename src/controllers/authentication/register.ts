import * as express from 'express';

import db from '../../db';
import { tokens } from '../../helpers';
import { errors } from '../../constants';

export default async (req: express.Request, res: express.Response): Promise<Express.Response> => {
  try {
    const { email, password } = req.body;

    const existingUser = await db.Users.methods.getByEmail(email);

    if (existingUser) {
      return res.sendStatus(errors.codes.BAD_REQUEST_400);
    }

    if (!email || !password) {
      return res.sendStatus(errors.codes.BAD_REQUEST_400);
    }

    const salt = tokens.random();
    const updatedAuthentication = {
      salt,
      password: tokens.authentication(salt, password),
    };

    const user = await db.Users.methods.create({
      ...req.body,
      authentication: updatedAuthentication,
    });

    return res.status(errors.codes.OK_200).json(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(errors.codes.BAD_REQUEST_400);
  }
};

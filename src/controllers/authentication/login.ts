import * as express from 'express';
import { get, omit } from 'lodash';

import db from '../../db';
import { tokens, build } from '../../helpers';
import { cookies, errors } from '../../constants';

export default async (req: express.Request, res: express.Response): Promise<Express.Response> => {
  try {
    const { email, password } = req.body;

    if (!password) {
      return res
        .status(errors.codes.BAD_REQUEST_400)
        .json({ message: errors.messages.BAD_REQUEST })
        .end();
    }

    const user = await db.Users.methods
      .getByEmail(email)
      .select('+authentication.password +authentication.salt');

    if (!user) {
      return res
        .status(errors.codes.BAD_REQUEST_400)
        .json({ message: errors.messages.BAD_REQUEST })
        .end();
    }

    const expectedHash = tokens.authentication(get(user, 'authentication.salt'), password);

    if (get(user, 'authentication.password') !== expectedHash) {
      return res
        .status(errors.codes.UNAUTHORIZED_403)
        .json({ message: errors.messages.UNAUTHORIZED })
        .end();
    }

    user.authentication.sessionToken = tokens.authentication(tokens.random(), user._id);

    await user.save();

    res.cookie(cookies.AUTHENTICATION, user.authentication.sessionToken, build.cookieOptions());

    return res
      .status(errors.codes.OK_200)
      .json(omit(user, ['authentication']))
      .end();
  } catch (error) {
    console.log(error);
    return res
      .status(errors.codes.BAD_REQUEST_400)
      .json({ message: errors.messages.BAD_REQUEST })
      .end();
  }
};

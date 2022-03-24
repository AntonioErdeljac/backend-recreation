import * as express from 'express';
import { get } from 'lodash';

import db from '../../db';
import { errors } from '../../constants';

export default async (req: express.Request, res: express.Response): Promise<Express.Response> => {
  try {
    const user = get(req, 'identity');

    const rooms = await db.Rooms.methods.get({ ownerId: user._id });

    if (!rooms) {
      return res.sendStatus(errors.codes.NOT_FOUND_404);
    }

    return res.json(rooms);
  } catch (error) {
    console.log(error);
    return res.sendStatus(errors.codes.BAD_REQUEST_400);
  }
};

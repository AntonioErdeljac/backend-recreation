import * as express from 'express';
import { get } from 'lodash';

import db from '../../db';
import { errors } from '../../constants';

export default async (req: express.Request, res: express.Response): Promise<Express.Response> => {
  try {
    const { id } = req.params;
    const user = get(req, 'identity');

    const existingRoom = await db.Rooms.methods.getById(id);

    if (!existingRoom) {
      return res.sendStatus(errors.codes.BAD_REQUEST_400);
    }

    if (existingRoom.ownerId.toString() !== user._id.toString()) {
      return res.sendStatus(errors.codes.UNAUTHORIZED_403);
    }

    const deletedRoom = await db.Rooms.methods.remove(id, user._id);

    return res.json(deletedRoom);
  } catch (error) {
    console.log(error);
    return res.sendStatus(errors.codes.BAD_REQUEST_400);
  }
};

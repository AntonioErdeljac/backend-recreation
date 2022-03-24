import * as express from 'express';

import db from '../../db';
import { errors } from '../../constants';

export default async (req: express.Request, res: express.Response): Promise<Express.Response> => {
  try {
    const { isLocked, roomNamePrefix, roomNamePattern, endDate } = req.body;

    if ([isLocked, roomNamePrefix, roomNamePattern, endDate].some((value) => value === undefined)) {
      return res
        .status(errors.codes.BAD_REQUEST_400)
        .json({ message: errors.messages.BAD_REQUEST })
        .end();
    }

    const existingRoom = await db.Rooms.methods.getByPrefix(roomNamePrefix);

    if (existingRoom) {
      return res.sendStatus(errors.codes.BAD_REQUEST_400);
    }

    const room = await db.Rooms.methods.create({
      ...req.body,
    });

    return res.status(errors.codes.OK_200).json(room).end();
  } catch (error) {
    console.log(error);
    return res
      .status(errors.codes.BAD_REQUEST_400)
      .json({ message: errors.messages.BAD_REQUEST })
      .end();
  }
};

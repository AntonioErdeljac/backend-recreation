import * as express from 'express';
import { get } from 'lodash';

import db from '../../db';
import { errors } from '../../constants';

export default async (req: express.Request, res: express.Response): Promise<Express.Response> => {
  try {
    const { roomName, isLocked, mode, type } = req.body;
    const user = get(req, 'identity');

    if (!roomName) {
      return res
        .status(errors.codes.BAD_REQUEST_400)
        .json({ message: errors.messages.BAD_REQUEST })
        .end();
    }

    const existingRoom = await db.Rooms.methods.getByRoomName(roomName);

    if (existingRoom) {
      return res.sendStatus(errors.codes.BAD_REQUEST_400);
    }

    const room = await db.Rooms.methods.create({
      roomName,
      isLocked,
      mode,
      type,
      isClaimed: true,
      ownerId: user._id,
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

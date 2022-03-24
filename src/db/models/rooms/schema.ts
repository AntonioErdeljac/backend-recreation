import * as mongoose from 'mongoose';
import { keys } from 'lodash';

import { RoomInterface } from './interfaces';

import { schemaTypes } from '../helpers';

import { rooms } from '../../../constants';

export const RoomSchema: mongoose.Schema = new mongoose.Schema({
  isLocked: schemaTypes.boolean({ default: true }),
  isClaimed: schemaTypes.boolean({ default: false }),
  roomName: schemaTypes.string({ required: true, unique: true }),
  mode: schemaTypes.string({ default: rooms.modes.GROUP, enum: keys(rooms.modes) }),
  type: schemaTypes.date({ default: rooms.types.PERSONAL, enum: keys(rooms.types) }),
  ownerId: { ref: 'User', type: mongoose.Schema.Types.ObjectId },
});

export const Room: mongoose.Model<RoomInterface> = mongoose.model<RoomInterface>(
  'Room',
  RoomSchema
);

export default Room;

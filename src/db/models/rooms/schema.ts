import * as mongoose from 'mongoose';

import { RoomInterface } from './interfaces';

import { schemaTypes } from '../helpers';

export const RoomSchema: mongoose.Schema = new mongoose.Schema({
  isLocked: schemaTypes.boolean({ default: true }),
  roomName: schemaTypes.string({ required: true }),
  mode: schemaTypes.string({ default: 'group' }),
  type: schemaTypes.date({ default: 'personal' }),
});

export const Room: mongoose.Model<RoomInterface> = mongoose.model<RoomInterface>(
  'Room',
  RoomSchema
);

export default Room;

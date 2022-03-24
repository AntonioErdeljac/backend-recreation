import * as mongoose from 'mongoose';

import { RoomInterface } from './interfaces';

import { schemaTypes } from '../helpers';

export const RoomSchema: mongoose.Schema = new mongoose.Schema({
  isLocked: schemaTypes.boolean({ required: true, default: true }),
  roomNamePrefix: schemaTypes.string({ required: true }),
  roomNamePattern: schemaTypes.string({ required: true, default: 'uuid' }),
  endDate: schemaTypes.date({ required: true }),
});

export const Room: mongoose.Model<RoomInterface> = mongoose.model<RoomInterface>(
  'Room',
  RoomSchema
);

export default Room;

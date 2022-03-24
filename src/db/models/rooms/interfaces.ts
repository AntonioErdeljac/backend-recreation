import * as mongoose from 'mongoose';

export interface RoomInterface extends mongoose.Document {
  isLocked: boolean;
  mode: string;
  roomName: string;
  type: string;
  ownerId: string;
  isClaimed: boolean;
}

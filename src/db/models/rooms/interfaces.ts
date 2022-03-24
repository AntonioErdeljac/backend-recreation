import * as mongoose from 'mongoose';

export interface RoomInterface extends mongoose.Document {
  isLocked: boolean;
  roomNamePrefix: string;
  roomNamePattern: string;
  endDate: Date;
}

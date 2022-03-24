import mongoose from './mongoose';
import { users, rooms } from './models';

export default {
  mongoose,
  Users: users,
  Rooms: rooms,
};

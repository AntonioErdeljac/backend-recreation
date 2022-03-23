import * as mongoose from 'mongoose';

import { UserInterface } from './interfaces';

import { schemaTypes } from '../helpers';

export const UserSchema: mongoose.Schema = new mongoose.Schema({
  displayName: schemaTypes.string({ required: true }),
  email: schemaTypes.string({ required: true, unique: true }),
  authentication: {
    password: schemaTypes.string({ required: true, select: false }),
    sessionToken: schemaTypes.string({ select: false }),
    salt: schemaTypes.string({ select: false }),
  },
});

export const User: mongoose.Model<UserInterface> = mongoose.model<UserInterface>(
  'User',
  UserSchema
);

export default User;

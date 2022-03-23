import * as mongoose from 'mongoose';

export interface UserInterface extends mongoose.Document {
  displayName: string;
  email: string;
  authentication: {
    password: string;
    sessionToken?: string;
    salt?: string;
  };
}

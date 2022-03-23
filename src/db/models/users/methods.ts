import { User } from './schema';

const isValid = (values: Record<string, any>): boolean => !new User(values).validateSync();

const get = () => User.find();

const getById = (id: string) => User.findById(id);

const getByEmail = (email: string) => {
  const query = { email };

  return User.findOne(query);
};

const getBySessionToken = (sessionToken: string) => {
  const query = { 'authentication.sessionToken': sessionToken };

  return User.findOne(query);
};

const create = (values: Record<string, any>): Record<string, any> =>
  new User(values).save().then((user) => user.toObject());

export default {
  create,
  get,
  getByEmail,
  getBySessionToken,
  getById,
  isValid,
};

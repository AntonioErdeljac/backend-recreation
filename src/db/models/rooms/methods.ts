import { Room } from './schema';

const isValid = (values: Record<string, any>): boolean => !new Room(values).validateSync();

const get = () => Room.find();

const getById = (id: string) => Room.findById(id);

const getByPrefix = (prefix: string) => Room.findOne({ roomNamePrefix: prefix });

const create = (values: Record<string, any>): Record<string, any> =>
  new Room(values).save().then((room) => room.toObject());

export default {
  create,
  get,
  getById,
  isValid,
  getByPrefix,
};

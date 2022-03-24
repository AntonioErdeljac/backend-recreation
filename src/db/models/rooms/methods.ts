import { Room } from './schema';

const isValid = (values: Record<string, any>): boolean => !new Room(values).validateSync();

const get = (query: Record<string, any>) => Room.find(query);

const getById = (id: string) => Room.findById(id);

const getByRoomName = (roomName: string) => Room.findOne({ roomName });

const remove = (roomId: string, ownerId: string) => Room.findOneAndDelete({ _id: roomId, ownerId });

const create = (values: Record<string, any>): Record<string, any> =>
  new Room(values).save().then((room) => room.toObject());

export default {
  create,
  get,
  getById,
  isValid,
  getByRoomName,
  remove,
};

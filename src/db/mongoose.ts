import mongoose from 'mongoose';

import config from '../config';

mongoose.Promise = Promise;
mongoose.connect(config.mongo.uri);
mongoose.connection.on('error', (error: Error) => console.log(error));

export default mongoose;

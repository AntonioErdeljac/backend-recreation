const PORT = process.env.PORT || 8080;
const DOMAIN = process.env.DOMAIN || 'localhost';
const PROTOCOL = process.env.PROTOCOL || 'http://';
const CLIENT_URL = 'http://localhost:8080';

const mongo: { uri: string } = {
  uri: process.env.MONGO_URI as string,
};

export default {
  PORT,
  DOMAIN,
  PROTOCOL,
  CLIENT_URL,
  mongo,
};

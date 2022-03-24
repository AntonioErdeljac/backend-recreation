import * as crypto from 'crypto';

const secret = 'backend-practice';

const random = (length = 10, isNumeric = false): string => {
  const chars = isNumeric ? '1234567890' : 'ABCDEFGHIJKLMNOPRSTWXYZabcdefghijklmnoprstwxyz';
  let token = '';

  for (let i = 0; i < length; i += 1) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return token;
};

const authentication = (salt: string, password: string): string =>
  crypto.createHmac('sha256', [salt, password].join('/')).update(secret).digest('hex');

export default {
  random,
  authentication,
};

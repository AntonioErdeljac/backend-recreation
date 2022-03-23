import config from '../config';

const cookieOptions = (): Record<string, any> => ({
  domain: config.DOMAIN,
  secure: config.PROTOCOL === 'https://',
  path: '/',
});

export default {
  cookieOptions,
};

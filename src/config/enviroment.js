import dotenv from 'dotenv';

dotenv.config();

export const env = {
  seceret_jwt: process.env.SECERET_JWT,
  mlabUser: process.env.MLAB_USER,
  mlabPass: process.env.MLAB_PASS,
};

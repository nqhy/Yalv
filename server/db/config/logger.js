import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: './tmp/log/error.log', level: 'error' }),
    new winston.transports.File({ filename: './tmp/log/info.log', level: 'info' }),
    new winston.transports.File({ filename: './tmp/log/debug.log', level: 'debug' }),
    new winston.transports.File({ filename: './tmp/log/combined.log' }),
  ],
});
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

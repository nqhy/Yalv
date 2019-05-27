
import swaggerFastify from 'fastify-swagger';
import dotenv from 'dotenv';

import Connection from '../db/config/index';
import swagger from '../db/config/swagger';
import routes from '../routes/userRoute';

const fastify = require('fastify')({
  logger: true,
});

routes.forEach((route) => [
  fastify.route(route),
]);

// Dotenv Config
dotenv.config();

// Config Swagger
fastify.register(swaggerFastify, swagger.options);

// Start Server
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
    Connection();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

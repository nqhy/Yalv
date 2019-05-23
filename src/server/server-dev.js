
import swaggerFastify from 'fastify-swagger';

import Connection from '../db/config/index'
import swagger from '../db/config/swagger';
import routes from '../routes/userRoute';

const fastify = require('fastify')({
  logger: true
})

routes.forEach((route, index) => [
  fastify.route(route)
])

//Config Swagger
fastify.register(require('fastify-swagger'), swagger.options)


// Start Server
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
    const db = new Connection();
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()


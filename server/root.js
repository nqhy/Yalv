import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './db/config/index';
import { logger } from './db/config/logger';
import schema from './graphql';

const app = express();

// Dotenv Config
process.env = dotenv.config().parsed;

// MiddleWare
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

// Start Server
const port = 8000 || process.env.PORT;

app.listen(port, () => {
  Connection();
  logger.info(`Server is running at ${port}`);
});

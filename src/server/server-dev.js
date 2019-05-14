import express from 'express';
import webpack from 'webpack'

import config from '../../webpack.config';
import Connection from '../db/config';

const app = express(),
            DIST_DIR = __dirname,
            compiler = webpack(config)

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
  const db = new Connection();
});

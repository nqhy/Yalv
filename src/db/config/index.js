import mongoose from 'mongoose';

const server = '127.0.0.1:27017';
const database = 'YalvDb';

export default class Database {
  constructor() {
    this._connect()
  }

  _connect() {
    mongoose.connect(`mongodb://${server}/${database}`, {
      useNewUrlParser: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500,
      poolSize: 10,
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000,
      family: 4,
    })
    .then(() => {
      console.log('Database connection succesful')
    })
    .catch(err => {
      console.error(`Database connection error => ${err}`)
    })
  }
}

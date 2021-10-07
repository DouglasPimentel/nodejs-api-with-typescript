import { createServer } from 'http';
import app from './app';
import { config } from './config';
import { dbConnection } from './database';

(() => {
  dbConnection.on('error', err => {
    console.error(err);
  });

  dbConnection.once('connected', () => {
    console.info('Mongo connected');
  });

  dbConnection.on('reconnected', () => {
    console.info('Mongo re-connected');
  });
  dbConnection.on('disconnected', () => {
    console.info('Mongo disconnected');
  });

  const server = createServer(app.callback());

  server.listen(config.PORT, () => {
    console.log(`Server running on http://localhost:${config.PORT}`);
  });
})();

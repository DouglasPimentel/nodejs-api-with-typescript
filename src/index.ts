import { createServer } from 'http';
import app from './app';
import { config } from './config';

(async () => {
  const server = createServer(app.callback());

  server.listen(config.PORT, () => {
    console.log(`Server runnining on the: http://localhost:${config.PORT}`);
  });
})();

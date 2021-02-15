import express from 'express';

class Index {
  server: express.Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    // this.server.use(routes);
  }
}

export default {
  path: '/api',
  handler: new Index().server
};

import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import path from 'path';

const PORT = process.env.PORT || 8001;
const NODE_ENV = process.env.NODE_ENV || 'production';

const app = express();

// Configure Express
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/dist', express.static(path.join(__dirname, '..', '/dist')));
app.use('/public', express.static(path.join(__dirname, '..', '/dist')));

// Compile webpack bundle in development
if (NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const config = require('../webpack.config');

  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
}

// Send index.html when root url is requested
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

const server = http.createServer(app);

console.log(JSON.stringify({
  'React Redux Performance': null,
  'Address:': `http://localhost:${ PORT }`,
  'NODE_ENV:': NODE_ENV,
}, null, 2));

server.listen(PORT);

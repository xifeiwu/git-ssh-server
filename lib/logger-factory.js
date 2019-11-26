const path = require('path');
const loggerFactory = require('busybox/node_modules/logger-factory');
const logger = loggerFactory('auth');
loggerFactory.getState().setConfigs({
  debug: '*',
  useColors: true,       // false
  toFile: path.resolve(__dirname, 'logger'),
  maxSize: 1024 * 1024 * 16,
  maxCount: 10,
});

module.exports = loggerFactory;
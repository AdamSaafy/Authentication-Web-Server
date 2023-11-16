const NodeCache = require("node-cache");
const myCache = new NodeCache();

module.exports = {
  setCache: (key, value) => {
    myCache.set(key, value);
  },

  getCache: (key) => {
    return myCache.get(key);
  }
};
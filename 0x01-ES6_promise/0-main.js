require('@babel/register')({
  presets: ['@babel/preset-env']
});

const getResponseFromAPI = require('./0-promise.js').default;

const response = getResponseFromAPI();
console.log(response instanceof Promise);

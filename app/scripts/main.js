require.config({
  shim: {
  },

  paths: {
    jquery: 'vendor/jquery.min',
    lodash: '../components/lodash/lodash',
    handlebars: '../components/handlebars/handlebars',
    text: '../components/text/text'
  }
});
 
require(['app'], function(app) {
    console.log("app started...");
});
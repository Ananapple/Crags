require.config({
  shim: {
  },

  paths: {
    //vendor
    jquery: 'vendor/jquery.min',
    lodash: '../components/lodash/lodash',
    handlebars: '../components/handlebars/handlebars',
    text: '../components/text/text',

    //internal
    component: 'ui-components/component'
  }
});
 
require(['app'], function(app) {
    console.log("app started...");
});
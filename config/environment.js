/* jshint node: true */

module.exports = function(environment) {

  var ENV = {
    modulePrefix: 'swag-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    contentSecurityPolicy: {
      'frame-src': '\'self\' http://static.ak.facebook.com https://s-static.ak.facebook.com https://www.facebook.com',
      'img-src': 'self https://www.facebook.com',
      'style-src': '\'self\' \'unsafe-inline\'',
      'script-src': '\'self\' https://connect.facebook.net http://connect.facebook.net https://graph.facebook.com',
      'connect-src': '\'self\' ws://localhost:35729 ws://0.0.0.0:35729 http://0.0.0.0:4200/csp-report http://localhost:8000 https://rawgit.com http://learninglocker.swag.testing.tunapanda.org'
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      xAPIEndpoint: "http://learninglocker.swag.testing.tunapanda.org/data/xAPI/",
      xAPIUsername: "caae95f54d6545c76fc289f02a3c1d51c455f7e6",
      xAPIPassword: "40cb0287f95189298729f6ccc36f6277840604ad",

      // overide the login email with this email
      agentEmailOverride: 'jake@tunapanda.org',

      // set to true to disable api requests and use fixtures in models/swagmap
      useFixtures: true
    }
  };


  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production' && process.env.GH_PAGES === 'true') {
    ENV.locationType = 'hash';
    ENV.baseURL = '/swag-ember';
  }

  return ENV;
};

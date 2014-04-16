exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '../test/e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
//chromeDriver: 'C:/Users/Medion/AppData/Roaming/npm/node_modules/protractor/selenium/chromedriver.exe',

//seleniumServerJar: 'C:/Users/Medion/AppData/Roaming/npm/node_modules/protractor/selenium/selenium-server-standalone-2.39.0.jar',

  baseUrl: 'http://localhost/angular-seed-test/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};

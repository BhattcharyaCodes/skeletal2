import { browser, Config, ProtractorBrowser } from 'protractor';
import protractor = require('protractor');

var HtmlReporter = require('protractor-beautiful-reporter');

export const config: Config = {
  directConnect: true,
   capabilities: {
       'browserName': 'chrome',
        chromeOptions: {
             //args: [ "--headless", "--disable-gpu" ]
       },
   },
   framework: 'jasmine',
   specs: [
        './src/tests/*.test.js'
    ],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
    },
    onPrepare: async() => {
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'Reports/screenshots',
            screenshotsSubfolder: 'images'
         }).getJasmine2Reporter());
        let globals = require('protractor');
        let browser: ProtractorBrowser = globals.browser;
       await browser.waitForAngularEnabled(false);
        await browser.driver.manage().window().maximize();
        await browser.driver.manage().window().setPosition(0, 0);        
        await browser.manage().timeouts().implicitlyWait(5000);
   },
    onComplete: () => {
        browser.close();
    }
};
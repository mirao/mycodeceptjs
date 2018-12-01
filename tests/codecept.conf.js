exports.config = {
    "tests": "./*_test.js",
    "timeout": 10000,
    "output": "./output",
    "helpers": {
      "WebDriverIO": {
        "url": ((profile) => {
          switch (profile) {
            default: // DEV environment
              return 'https://dev.spork.cloud'
            case 'jobr':
              return 'https://spork-publisher-jobr.firebaseapp.com'
            case 'acc':
              return 'https://acc.spork.cloud'
          }
        })(process.profile),
        "browser": 'chrome'
      }
    },
    "include": {
      "I": "./steps_file.js"
    },
    "bootstrap": false,
    "mocha": {},
    "name": "tests",
    "multiple": {
      "dev": {  
        "browsers": [
          "chrome",
          "firefox"
        ]
      },
      "acc": {
        "browsers": [
          "firefox"
        ]
      }
    }
  }
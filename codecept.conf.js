exports.config = {
    "output": "./output",
    "helpers": {
        "WebDriver": {
            "url": "https://www.rohlik.cz",
            "browser": process.profile || "chrome",
            windowSize: "maximize",
            "restart": false,
            "waitForTimeout": 20000,
            "smartWait": 20000
        },
        "REST": {
            "endpoint": "https://localhost/api",
            "resetHeaders": false
        },
        "Rohlik": {
            "require": "./rohlik_helper.js"
        },
        "Mochawesome": {
            "uniqueScreenshotNames": "true"
        },
        "My": {
            "require": "./my_helper.js",
            "connection": "mysql://user:password@localhost:3317/bela_jobr"
        },
        "DbHelper": {
            "require": "./node_modules/codeceptjs-dbhelper"
        }
    },
    "include": {
        "I": "./steps_file.js",
        "commonPage": "./pages/common.js",
        "commonStep": "./steps/Common.js"
    },
    "mocha": {
        "reporterOptions": {
            "codeceptjs-cli-reporter": {
                "stdout": "-",
                "options": {
                    "verbose": false,
                    "steps": true
                }
            },
            "mochawesome": {
                "stdout": "./output/console.log",
                "options": {
                    "reportDir": "./output",
                    "reportFilename": "report"
                }
            }
        }
    },
    "bootstrap": false,
    "teardown": null,
    "hooks": [
        "./myhook.js"
    ],
    "gherkin": {},
    "plugins": {
        "screenshotOnFail": {
            "enabled": true
        },
        "allure": {}
    },
    "tests": "./*_test.js",
    "timeout": 10000,
    "name": "mycodeceptjs"
};

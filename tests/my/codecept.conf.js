exports.config = {
    tests: "./*_test.js",
    output: "./output",
    helpers: {
        WebDriver: {
            url: "http://localhost",
            browser: "chrome",
            waitForTimeout: 10000,
            smartWait: 10000
        }
    },
    include: {
        I: "./steps_file.js"
    },
    bootstrap: null,
    mocha: {},
    name: "my",
    plugins: {
        retryFailedStep: {
            enabled: false
        },
        screenshotOnFail: {
            enabled: true
        }
    }
};

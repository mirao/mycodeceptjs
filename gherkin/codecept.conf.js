exports.config = {
    output: "./output",
    helpers: {
        WebDriverIO: {
            url: "https://spork-jobr.firebaseapp.com",
            browser: "chrome",
            smartWait: 20000
        }
    },
    include: {
        I: "./steps_file.js"
    },
    mocha: {},
    bootstrap: null,
    teardown: null,
    hooks: [],
    gherkin: {
        features: "./features/*.feature",
        steps: ["./step_definitions/steps.js"]
    },
    plugins: {
        screenshotOnFail: {
            enabled: true
        }
    },
    tests: "./*_test.js",
    name: "gherkin"
};
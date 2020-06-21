exports.config = {
    tests: "./*_test.js",
    output: "./output",
    helpers: {
        WebDriver: {
            url: "https://codecept.io",
            browser: "chrome",
            waitForTimeout: 5000,
        },
    },
    include: {
        I: "./steps_file.js"
    },
    bootstrap: null,
    mocha: {},
    name: "manual"
};

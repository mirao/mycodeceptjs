exports.config = {
    tests: "./*_test.js",
    output: "./output",
    helpers: {
        WebDriver: {
            url: "https://codecept.io",
            browser: "chrome",
            manualStart: true
        },
        My: {
            require: "./my_helper.js",
        },
    },
    include: {
        I: "./steps_file.js"
    },
    bootstrap: null,
    mocha: {},
    name: "manual"
};
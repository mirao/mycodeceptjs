exports.config = {
    tests: "./*_test.js",
    output: "./output",
    helpers: {
        WebDriver: {
            url: "http://localhost",
            "browser": process.profile || "chrome",
        }
    },
    include: {
        I: "./steps_file.js"
    },
    bootstrap: null,
    mocha: {},
    name: "seeinfield"
};
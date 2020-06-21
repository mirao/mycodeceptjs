const browser = process.profile;

exports.config = {
    tests: "./*_test.js",
    output: "./output",
    helpers: {
        WebDriver: {
            url: "https://www.google.com",
            port: browser === "firefox" ? 4446 : 4444,
            browser: browser || "chrome",
            uniqueScreenshotNames: true
        }
    },
    include: {
        I: "./steps_file.js"
    },
    bootstrap: null,
    mocha: {},
    name: "screenshot",
    plugins: {
        retryFailedStep: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true,
        }
    },
    multiple: {
        dev: {
            browsers: [
                {
                    port: 4444,
                    browser: "chrome",
                    outputName: "chrome"
                },
                {
                    port: 4446,
                    browser: "firefox",
                    outputName: "firefox"
                }
            ]
        }
    }
};

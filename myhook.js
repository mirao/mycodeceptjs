const event = require("codeceptjs").event;

module.exports = function () {

    // eslint-disable-next-line no-unused-vars
    event.dispatcher.on(event.test.failed, function (test, error) {

        console.log("--- I am a fail --");
        return "Error";

    });
};
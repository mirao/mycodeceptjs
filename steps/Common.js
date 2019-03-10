const I = actor();

module.exports = {

    typeText(text) {
        text.split("").forEach((char) => {I.pressKey(char);});
    // text.split("").forEach(async (char) => {await I.pressKey(char);});
    }
};

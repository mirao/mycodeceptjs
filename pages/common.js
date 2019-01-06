
const I = actor();

module.exports = {

    expTitle: "Online supermarket Rohlik.cz - nejrychlejší doručení ve městě",

    /**
     * Asserts title
     */
    async seeTitle2() {
        const assert = require("assert");
        const actTitle = await I.grabTitle();
        assert.strictEqual(actTitle, this.expTitle, "Something is bad");
    },
    
    /**
     * Prints text
     * @param {String} text
     */
    printTxt2(text) {
        console.log(text.toUpperCase());
    }
};

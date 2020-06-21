/* eslint-disable no-console */

const { I } = inject();

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

    hej() {
        console.log("Hej");
    },

    /**
     * Prints text
     * @param {String} text
     */
    printTxt2(text) {
        console.log(text.toUpperCase());
    },

    async seeElement(element) {
        try {
            await I.seeElement(element);
            return true;
        } catch (error) {
            return false;
        }
    }
};

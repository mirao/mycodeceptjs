const expTitle = "Online supermarket Rohlik.cz - nejrychlejší doručení ve městě";

class Rohlik extends Helper {
  
    // before/after hooks
    _before() {
    // remove if not used
    }

    _after() {
    // remove if not used
    }

    // add custom methods here
    // If you need to access other helpers
    // use: this.helpers['helperName']

    /**
     * Asserts title
     */
    async seeTitle3() {
        const assert = require("assert");
        const I = this.helpers["WebDriverIO"];
        const actTitle = await I.grabTitle();
        assert.strictEqual(actTitle, expTitle, "Something is bad");
    }
}

module.exports = Rohlik;

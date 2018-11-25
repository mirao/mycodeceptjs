
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    /**
     * Asserts title
     */
    async seeTitle() {
      const assert = require('assert');
      const title = await this.grabTitle();
      assert.strictEqual(title, 'Online supermarket Rohlik.cz - nejrychlejší doručení ve městě', 'Something is bad');
    },
    
    /**
     * Prints text
     */
    printTxt(text) {
      console.log(text);
    }
  });
}

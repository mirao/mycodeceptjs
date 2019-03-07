
class My extends Helper {

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
   * Get JDBC like connection string from config file 
   * @return {Promise<string>} Connection string
   */
    async getConnectionString() {
        return this.config.connection; 
    }

    /**
     * Type text into active input field. If the client is Firefox, slow typing down
     * @param {string} text
     */
    async typeText(text) {
        const webDriver = this.helpers["WebDriver"];
        const browser = webDriver.config.browser;
        if (browser == "firefox") { // Slow down typing in Firefox
            await webDriver.wait(1);
            for (const char of text.split("")) {
                await this.pressKey(char);
            }
        } else { // Chrome
            this.pressKey(text);
        }
    }
   
    /**
     * 
     * @param {String|String[]} value  The sequence of keys to type. An array or string must be provided.
     */
    async pressKey(value) {
        const webDriver = this.helpers["WebDriver"];
        const client = webDriver.browser;
        const browser = webDriver.config.browser;

        if (browser == "chrome") {
            await webDriver.pressKey(value);
            return;
        }
        const {protocol, port, hostname, path} = client.options;
        // Build path to Selenium REST API endpoint
        const apiUrl = `${protocol}://${hostname}:${port}${path}`;
        
        const rest = this.helpers["REST"];
 
        let keySequence = [];
        /**
         * replace key with corresponding unicode character
         */
        const _utils = require("./node_modules/webdriverio/build/utils");
        if (typeof value === "string") {
            keySequence = (0, _utils.checkUnicode)(value);
        } else if (value instanceof Array) {
            for (const charSet of value) {
                keySequence = keySequence.concat((0, _utils.checkUnicode)(charSet));
            }
        } else {
            throw new Error("\"keys\" command requires a string or array of strings as parameter");
        }
              
        const keyDownActions = keySequence.map(value => ({
            type: "keyDown",
            value
        }));
        const keyUpActions = keySequence.map(value => ({
            type: "keyUp",
            value
        }));
        
        const payload = {
            actions: [
                {
                    type: "key",
                    id: "keyboard",
                    actions: [...keyDownActions, ...keyUpActions]
                }
            ]
        };

        // Send keys
        const result = await rest.sendPostRequest(`${apiUrl}/session/${client.sessionId}/actions`, payload);
        const assert = require("assert");
        assert.strictEqual(result.status, 200, "Sending of keys failed");
    }
}

module.exports = My;

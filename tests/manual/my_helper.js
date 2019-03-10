
class My extends Helper {
    startBrowser() {
        this.helpers["WebDriver"]._startBrowser();
    }
    stopBrowser() {
        this.helpers["WebDriver"]._stopBrowser();
    }
}

module.exports = My;

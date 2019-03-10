
Feature("Manual");

Scenario("test something", (I) => {
    I.startBrowser();
    I.amOnPage("/");
    I.stopBrowser();
});

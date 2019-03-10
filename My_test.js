/// <reference path="./steps.d.ts" />

Feature("My");

Scenario("One", (I) => {
    I.amOnPage("https://codecept.io/quickstart");
    I.fillField("#search_input_react", "WebDriver");
    I.doubleClick("#search_input_react");
});
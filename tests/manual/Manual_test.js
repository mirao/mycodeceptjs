Feature("Manual");

Scenario("Test something", (I) => {
    I.amOnPage("/");
    I.waitForElement({ css: "input[type='textx']" });
}).config({ browser: "firefox" });

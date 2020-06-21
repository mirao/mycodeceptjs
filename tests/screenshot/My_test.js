Feature("My");

Scenario("Test something", (I) => {
    I.amOnPage("https://codecept.io");
    I.see("Ahoj1");
});

Scenario("Test something", (I) => {
    I.amOnPage("/");
    I.see("Ahoj2");
});

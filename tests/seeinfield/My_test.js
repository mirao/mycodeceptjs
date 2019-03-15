
Feature("My");

Scenario("One", async (I) => {
    I.amOnPage("https://codecept.io/quickstart");
    I.fillField("#search_input_react", "WebDriver");
    const value = await I.grabValueFrom("#search_input_react");
    require("assert").strictEqual(value.toString(), "");
});

// Scenario("Two", async (I) => {
//     I.amOnPage("https://spork-jobr.firebaseapp.com/");
//     I.fillField("input[name=username]", "WebDriver");
//     const value = await I.grabValueFrom("input[name=username]");
//     require("assert").strictEqual(value.toString(), "");
// });

// Scenario('Test @1', (I) => {
//     I.amOnPage("https://www.w3schools.com/html/html_forms.asp");
//     I.seeInField('input[name="firstname"]', "WebDriver1");
// });
/// <reference path="./steps.d.ts" />

Feature("My");

Scenario("One", async (I) => {
    I.amOnPage("https://jobr2.bmdcon.com/");
    I.click("#username");
    await I.typeText("Ahoj");
    I.wait(1);
    await I.pressKey(["Control Left", "a", "Control Left"]);
    await I.typeText("Cau");
    I.doubleClick("#username");
    pause();
    
});
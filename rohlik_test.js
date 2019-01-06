/// <reference path="./steps.d.ts" />
Feature("My testing");

Scenario("Test Rohlik", (I, commonPage) => {
    I.say("I am going to test Rohlik search");
    I.amOnPage("/");
    I.seeTitleEquals(commonPage.expTitle);
    I.seeInTitle("Rohlik");
    I.seeTitle();
    commonPage.seeTitle2();
    I.seeTitle3();
    I.fillField("#frm-productSearch-form-query", "Banany");
    I.waitForText("Nalezené produkty".toUpperCase(), 5, "#frm-productSearch-form > fieldset > div > span > div > div > div.tt-dataset.tt-dataset-0 > h3");
});

Scenario("Test BeLA", async (I) => {
    I.say("I am going to test BeLA login");
    I.amOnPage("https://jobr2.bmdcon.com");
    // Fill username and password
    within("body > div.mainpage > div.mcontent", () => {
        I.fillField({name: "username"}, "jobr");
        I.fillField({name: "password"}, "heslo2");
    });
    // Get password from input
    const password = await within("body > div.mainpage > div.mcontent", () => {
        return I.grabValueFrom({name: "password"});
    });
    // Fill password into username input
    within("body > div.mainpage > div.mcontent", () => {
        I.fillField({name: "username"}, password);
    });
    
    I.addMochawesomeContext({
        title: "expected output",
        value: {
            a: 1,
            b: "2",
            c: "d"
        }
    });

    I.see("bela_jobr", "/html/body/div[1]/div[2]/div[2]/i");
});

// Scenario('Test BeLA2', async (I) => {
//     I.see('bela_jobr');
// });

// After(async (I, commonPage) => {
//     await I.amOnPage('https://www.google.com');
//     I.printTxt('Finishing test');
//     commonPage.printTxt2('Hello World2');
// });

// Before((I) => { // or Background
//     I.printTxt('Starting test');
// });

// BeforeSuite((I) => {
//     I.printTxt('Starting suite');
// });

// AfterSuite((I) => {
//     I.printTxt('Finishing suite');
// });
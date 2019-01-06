/// <reference path="./steps.d.ts" />

Feature("My");

Scenario("One", (I) => {
    I.say("Check something");
    I.seeElement("#something");
});

Scenario("Two", (I) => {
    console.log("Pass");
    I.say("Pass");
});

/// <reference path="./steps.d.ts" />

Feature('Basic');

Scenario('Test something', (I) => {
    I.amOnPage('/');
    I.see("Log-in to your account");
    I.fillField('username', 'jobr@bmd-consulting.com');
    I.fillField('password', 'BeLAA091');
    I.click('LOGIN');
    I.waitForText('Jaromir Obr');
});

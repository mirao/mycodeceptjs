const I = actor();
// Add in your custom step files

Given("I open login page", () => {
    I.amOnPage("/");
});

Given("I enter username {string}", (username) => {
    I.fillField("username", username);
});

Given("I enter password {string}", (password) => {
    I.fillField("password", password);
});

When("I login", () => {
    I.click("LOGIN");
});

Then("I should see name {string} in user menu", (fullname) => {
    I.see(fullname, "span");
});


When("I logout from {string}", (fullname) => {
    I.click(locate("span").withText(fullname));
    I.click("Logout");
});

Then("I should see login screen", () => {
    I.see("Log-in to your account");
});

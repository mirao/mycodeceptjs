/// <reference path="./steps.d.ts" />

var personId;
var userId;

Feature('My');

BeforeSuite(async (I) => {
    // The first parameter is the key that will hold a reference to the db
    I.connect( "bela", await I.getConnectionString());
});

AfterSuite( async( I ) => {
    await I.run( "bela", "DELETE FROM users WHERE user_id = ?", userId );
    await I.run( "bela", "DELETE FROM persons WHERE person_id = ?", personId );
    await I.removeConnection( "bela" ); // also disconnects
} );

Scenario('test something', async (I) => {
    const email = "mira@domain.lab";
    const firstName = "Mira";
    const lastName = "Obr";

    // Create a person
    personId = (await I.run("bela", "INSERT INTO persons (first_name, last_name, created_by_source) VALUES (?, ?, ?)",
    firstName, lastName, "SQL")).insertId;

    // Create a user
    userId = (await I.run("bela", "INSERT INTO users (email, password, first_name, last_name, person_id) VALUES (?, ?, ?, ?, ?)",
    email, "4d025645a09d358af77bbc6faab65db8", firstName, lastName, personId)).insertId;
    
    const results = await I.query( "bela", "SELECT * FROM users WHERE email = ?", email );
    console.log(results[0].first_name + " " + results[0].last_name);

    // I.amOnPage('https://code.visualstudio.com/updates/v1_28');
    // I.openNewTab();
    // I.amOnPage('https://www.google.com');
    // I.switchToPreviousTab();
    // // Show number of elements by locate()
    // console.log(await I.grabNumberOfVisibleElements(locate('a').withText('Blog')));
});

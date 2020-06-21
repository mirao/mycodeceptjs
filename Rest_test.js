/* eslint-disable no-console */

Feature("Rest");

Scenario("Test API", async (I) => {
    I.haveRequestHeaders({
        "Content-Type": "application/json",
    });
    const ret = await I.sendPostRequest("/login", JSON.stringify({
        username: "username",
        password: "pass"
    }));

    console.log(ret);

    const ret2 = await I.sendPostRequest("/login", {
        username: "username",
        password: "pass"
    }, {
        "Content-Type": "application/json",
    });

    console.log(ret2.body);

});

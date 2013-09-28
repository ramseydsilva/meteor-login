Accounts.loginServiceConfiguration.remove({
    service: "facebook"
});

Accounts.loginServiceConfiguration.insert({
    service: "facebook",
    appId: "585282721530407",
    secret: "bf9cb22fd0ae1160d40b6ff244aa602e",
});

Meteor.startup(function () {

});

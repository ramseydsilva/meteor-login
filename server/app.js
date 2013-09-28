Accounts.loginServiceConfiguration.remove({
    service: "facebook"
});

Accounts.loginServiceConfiguration.insert({
    service: "facebook",
    appId: "585282721530407",
    secret: "75a730b58f5691de5522789070c319bc",
});

Meteor.startup(function () {

});

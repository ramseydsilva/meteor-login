Accounts.loginServiceConfiguration.remove({
    service: "facebook"
});

Accounts.onCreateUser(function (options, user) {
  if (options.profile) {
        //want the users facebook pic and it is not provided by the facebook.service
        options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        user.profile = options.profile;
    }
    return user;
});

Accounts.loginServiceConfiguration.insert({
    service: "facebook",
    appId: Meteor.settings.facebookAppId,
    secret: Meteor.settings.facebookSecret
});

Meteor.startup(function () {

});

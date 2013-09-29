Template.hello.greeting = function () {
    return "Welcome to app.";
};

Template.hello.events({
    'click #login-facebook': function(event) {
        Meteor.loginWithFacebook({
            requestPermissions: ['publish_actions']
        }, function (err) {
            if (err) {
                Session.set('errorMessage', err.reason || "Unknown error");
            } else {
                Template.hello.user = userAcct.services.facebook.name;
            }
        });
    },
    'click #logout': function(event) {
        Meteor.logout();
    }
});

console.log(Meteor.user());

Template.hello.user =  function() {
    return Meteor.user();
}

Template.hello.greeting = function () {
    return "Welcome to app.";
};

Template.hello.events({
    'click input' : function () {
     // template data, if any, is available in 'this'
     if (typeof console !== 'undefined')
         console.log("You pressed the button");
    }
});

Template.hello.events({'click': function(event) {
    Meteor.loginWithFacebook({
        requestPermissions: ['publish_actions']
    }, function (err) {
        if (err)
            Session.set('errorMessage', err.reason || "Unknown error");
    });
}});

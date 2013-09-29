var UserRouter = Backbone.Router.extend({
    routes: {
        "register(/)": register_view,
        "login(/)": login_view,
        "logout(/)": logout_view,
        "": main_view
    }
});

Router = new UserRouter();

Template.user.events({
    'click #login-facebook': function(event) {
        Meteor.loginWithFacebook({
            requestPermissions: ['publish_actions']
        }, function(err) {
            if (!err)
                Meteor.user().profile = Meteor.user().services.facebook();
        });
    },
    'click #register': function() { Router.navigate("/register/", {trigger: true}); },
    'click #login': function() { Router.navigate("/login/", {trigger: true}); },
    'click #logout': function() { Router.navigate("/logout/", {trigger: true}); },
    'submit #register-form': function(event) {
        var username = $(event.target).find('#username').val();
        var password = $(event.target).find('#password').val();
        if (username && password) {
            Accounts.createUser({
                username: username,
                password: password
            }, function(err) {
                if (err) {
                    $("#register_error").html(err.reason);
                } else {
                    Meteor.loginWithPassword(username, password);
                }
            });
        } else {
            $("#register_error").html("Both username and password are required");
        }
        return false;
    },
    'submit #login-form': function(event) {
        var username = $(event.target).find('#username').val();
        var password = $(event.target).find('#password').val();
        if (username && password) {
            Meteor.loginWithPassword(username, password,  function(err) {
                if (err) {
                    $("#login_error").html(err.reason);
                }
            });
        } else {
            $("#login_error").html("Both username and password are required");
        }
        return false;
    }
});

Template.user.user =  function() {
    if (Meteor.user()) {
        SessionAmplify.set('display_register', false);
        SessionAmplify.set('display_login', false);
    }
    return Meteor.user();
}

Template.user.display_register = function() {
    return SessionAmplify.get('display_register');
}

Template.user.display_login = function() {
    return SessionAmplify.get('display_login');
}

Template.users.users = function() {
    return Meteor.users.find();
}

Meteor.startup(function () {
    Backbone.history.start({pushState: true});
});

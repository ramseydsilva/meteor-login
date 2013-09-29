main_view = function(event) {
    SessionAmplify.set('display_register', false);
    SessionAmplify.set('display_login', false);
}

register_view = function(event) {
    main_view();
    SessionAmplify.set('display_register', true);
}

login_view = function(event) {
    main_view();
    SessionAmplify.set('display_login', true);
}

logout_view = function(event) {
    Meteor.logout();
    Router.navigate("/", {trigger: true});
}

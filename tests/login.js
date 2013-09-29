
//tests/posts.js
var assert = require('assert');

suite('User', function() {
    test('User is successfully saved to db', function(done, server) {
        server.eval(function() {
            Accounts.createUser({
                username: 'username',
                password: 'password'
            });
            var users = Meteor.users.find().fetch();
            emit('users', users);
        });

        server.once('users', function(users) {
            assert.equal(users.length, 1);
            done();
        });
    });

    test('Profile name is auto created from username when user registers', function(done, server, client) {
        server.eval(function() {
            Meteor.users.find().observe({
                added: addedNewUser
            });

            function addedNewUser(user) {
                emit('user', user);
            }
        }).once('user', function(user) {
            assert.equal(user.profile.name, 'JohnDoe');
            done();
        });

        client.eval(function() {
            Accounts.createUser({
                username: 'JohnDoe',
                password: 'password'
            });
        });
    });
});

'use strict';

app.factory('AuthService',

    /**
     * 1 - injecting the $firebaseSimpleLogin to hook into firebase's auth service
     * 2 - inject $rootScope - we will use this to create a signedIn method available everywhere.
     *
     * @param $firebaseSimpleLogin
     * @param FIREBASE_URL
     * @param $rootScope
     * @returns {{register: register, signedIn: signedIn, login: login, logout: logout}}
     */
    function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {

        /**
         * make a reference to our firebase
         * @type {Firebase}
         */
        var ref = new Firebase(FIREBASE_URL);

        /**
         * pass it along to $firebaseSimpleLogin.
         */
        var auth = $firebaseSimpleLogin(ref);

        /**
         * create our own Auth object that wraps firebase's auth service
         * @type {{register: register, signedIn: signedIn, login: login, logout: logout}}
         */
        var Auth = {

            /**
             * method for registering user
             * @param user
             * @returns {*}
             */
            register: function (user) {
                return auth.$createUser(user.email, user.password);
            },

            signedIn: function () {
                return auth.user !== null;
            },

            login: function (user) {
                return auth.$login('password', user);
            },

            logout: function () {
                auth.$logout();
            }
        };

        /**
         * inject $rootScope and make a function to check if the user is signed in. $rootScope is the scope that all
         * scopes inherit from, so this function will be available everywhere in our templates. It's best not to
         * clutter the $rootScope with too many functions, but this is a function we will need to execute frequently
         * across our application, so using $rootScope is a good fit.
         * @returns {*}
         */
        $rootScope.signedIn = function () {
            return Auth.signedIn();
        };

        return Auth;
    });
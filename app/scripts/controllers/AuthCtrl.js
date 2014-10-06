'use strict';

/**
 * $location: so we can redirect.
 * AuthService: so we can perform authentication
 */
app.controller('AuthCtrl', function($scope, $location, AuthService){

    /**
     * check to see if user is logged in; if so redirect.
     */
    if(AuthService.signedIn()){
        $location.path('/');
    }

    $scope.$on('$firebaseSimpleLogin:login', function () {
        $location.path('/');
    });

    /**
     * method wraps AuthService.login. Upon successfull login will redirect user to '/'
     */
    $scope.login = function () {
        AuthService.login($scope.user).then(function () {
            $location.path('/');
        }, function (error){
            $scope.error = error.toString();
        });
    };

    /**
     * provide a register method
     */
    $scope.register = function(){

        /**
         * register user and if success callback log user in.
         */
        AuthService.register($scope.user).then(function(authUser){

            console.log(authUser);

            /** log user in. */
            AuthService.login($scope.user).then(function(){
                $location.path('/');
            }, function(error){ //error redirecting a login attempt
                $scope.error = error.toString();
            });


        },function(error){ //error registering a new account
            $scope.error = error.toString();
        });
    };

});
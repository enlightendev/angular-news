'use strict';

/**
 * $scope: model
 * $location: used to navigate
 * Post: post service wraps angular firebase api;s
 */
app.controller('NavCtrl', function($scope, $location, Post, AuthService){

    $scope.post = {url: 'http://', 'title': ''};

    /**
     * The firebase methods return a promise which we can then chain with .then and pass a function that will get
     * called once the operation completes
     */


    $scope.submitPost = function () {

        /**
         * call angular to create a post.
         */
        Post.create($scope.post).then(function (ref) {
            $scope.post = {url: 'http://', 'title': ''};

            /**
             * redirect to post page after submitting post.
             */
            $location.path('/posts/' + ref.name());
        });
    };

    $scope.logout = function(){
        AuthService.logout();
    };

});
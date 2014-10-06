'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post) {

    $scope.posts = Post.all;

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

    $scope.deletePost = function (post) {
        Post.delete(post);
    };
});
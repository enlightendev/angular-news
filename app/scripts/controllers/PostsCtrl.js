'use strict';

app.controller('PostsCtrl', function ($scope, Post) {

    $scope.posts = Post.all;

    $scope.post = {url: 'http://', 'title': ''};

    /**
     * The firebase methods return a promise which we can then chain with .then and pass a function that will get
     * called once the operation completes
     */


    $scope.submitPost = function () {
        Post.create($scope.post).then(function () {
            $scope.post = {url: 'http://', 'title': ''};
        });
    };

    $scope.deletePost = function (post) {
        Post.delete(post);
    };
});
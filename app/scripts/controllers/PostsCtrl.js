'use strict';

app.controller('PostsCtrl', function ($scope, Post) {

    $scope.posts = Post.get();

    $scope.post = {
        url: 'http://',
        title: ''
    };

    $scope.submitPost = function () {
        //$scope.posts.push($scope.post);

        /**
         * The save function takes a second parameter as a function for this purpose (success callback).
         * In the callback, we get the object returned from the server as a parameter. Firebase will return
         * the ID in an object that's a reference to the saved post in this format: {name: (postId here)} so
         * we can create a callback to set the item on $scope.posts like so
         * @type {{url: string, title: string}|*}
         */
        Post.save($scope.post, function(ref){
            $scope.posts[ref.name] = $scope.post;
            $scope.post = {url: 'http://', title: ''};

        });
    };

    $scope.deletePost = function (index) {
        $scope.posts.splice(index, 1);
    };

});
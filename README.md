## routeProvider & routeParams

app.js -------

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/posts.html',
                controller: 'PostsCtrl'
            })
            .when('/posts/:postId', {   <- ----------------
                templateUrl: 'views/post.html',
                controller: 'PostViewCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
    
PostViewCtrl ---

    app.controller('PostViewCtrl', function($scope, $routeParams, Post){
        $scope.post = Post.find($routeParams.postId); <- -------------
    });
    
    
## $location
https://docs.angularjs.org/api/ng/service/$location

    app.controller('PostsCtrl', function ($scope, $location, Post) {
        .
        .
        .
        .
        /**
         * redirect to post page after submitting post.
         */
        $location.path('/posts/' + ref.name());
        .
        .
        .
        

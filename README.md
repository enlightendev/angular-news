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
        

## $rootScope

$rootScope is the scope that all scopes inherit from, so this function will be available everywhere in our templates.
notice in AUthService we use the $rootScope to create a signeIn method that can be used in many places to make sure user is 
signed in

    $rootScope.signedIn = function () {
        return Auth.signedIn();
    };
    
we the use this signed in method in a view as follows:

    <ul class="nav navbar-nav navbar-right" ng-show="signedIn()">
        <li>
            <a href="#" ng-click="logout()">Logout</a>
        </li>
    </ul>
    


/* global app:true */
'use strict';

/**
 * @ngdoc overview
 * @name angularNewsApp
 * @description
 * # angularNewsApp
 *
 * Main module of the application.
 */
var app = angular
    .module('angularNewsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'firebase'
    ]);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/posts.html',
            controller: 'PostsCtrl'
        })
        .when('/posts/:postId', {
            templateUrl: 'views/post.html',
            controller: 'PostViewCtrl'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'AuthCtrl'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'AuthCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.constant('FIREBASE_URL', 'https://incandescent-torch-45.firebaseio.com/');


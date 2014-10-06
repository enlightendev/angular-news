'use strict';

/*
app.factory('Post', function ($resource) {
    return $resource('https://incandescent-torch-45.firebaseio.com/posts/:id.json');
});
*/

app.factory('Post', function($firebase, FIREBASE_URL){

    /**
     * 1 - First, we want to create a Firebase reference for our posts.
     *     https://www.firebase.com/docs/javascript/firebase/
     *
     *     This indicates that there is a root object called 'posts' on our server that we want to open a connection to.
     */
    var ref = new Firebase(FIREBASE_URL + 'posts');

    /**
     * 2 - We can now create a var posts then pass this reference to the $firebase service which will return an angularFire
     *     object that will contain our data and has some helper functions for adding, deleting, updating and querying
     *     for objects within our 'posts' object.
     */
    var posts = $firebase(ref).$asArray();

    /**
     * 3 - Now we can create some methods for our service to return to help us actually manipulate the data at this location.
     *     We can use the methods on posts
     *
     *     https://www.firebase.com/docs/web/libraries/angular/api.html
     */
    var Post = {
        all: posts,
        create: function (post) {
            return posts.$add(post);
        },
        find: function (postId) {
            return $firebase(ref.child(postId)).$asObject();
        },
        delete: function (post) {
            return posts.$remove(post);
        }
    };

    return Post;
});
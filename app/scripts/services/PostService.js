'use strict';

/*
app.factory('Post', function ($resource) {
    return $resource('https://incandescent-torch-45.firebaseio.com/posts/:id.json');
});
*/

app.factory('Post', function($firebase, FIREBASE_URL){

    /**
     * This indicates that there is a root object called 'posts' on our server that we want to open a connection to.
     *
     * We can now create a var posts then pass this reference to the $firebase service which will return an angularFire
     * object that will contain our data and has some helper functions for adding, deleting, updating and querying
     * for objects within our 'posts' object.
     * @type {Firebase}
     */
    var ref = new Firebase(FIREBASE_URL + 'posts');

    var posts = $firebase(ref).$asArray();

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
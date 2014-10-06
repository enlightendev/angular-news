'use strict';

app.factory('Post', function ($resource) {
    return $resource('https://incandescent-torch-45.firebaseio.com/posts/:id.json');
});
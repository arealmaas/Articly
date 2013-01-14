'use strict';

ArticlyApp.factory('users', function() {
  // Service logic
  // ...

  var users = {};

  // Public API here
  return {
    get: function() {
      return users;
    }
   
  };
});

'use strict';

articlyApp.directive('horse', function() {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      element.text('this is the horse directive');
    }
  };
});

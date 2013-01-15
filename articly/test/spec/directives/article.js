'use strict';

describe('Directive: article', function() {
  beforeEach(module('ArticlyApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<article></article>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the article directive');
  }));
});

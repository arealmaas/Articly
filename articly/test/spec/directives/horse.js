'use strict';

describe('Directive: horse', function() {
  beforeEach(module('articlyApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<horse></horse>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the horse directive');
  }));
});

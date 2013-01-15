'use strict';

ArticlyApp.directive('article', function() {
  return {
    template: '<div class="row-fluid"><a href="#detailsModal"' +
    'data-toggle="modal" ng-click="setCurrentArticle(article.id)"'+
    'role="button" class="tab"><span>{{article.text}}</span></a><span '+
    'class="done-article-{{article.read}}">{{remainingRead(article)}}/'+
    '{{numberOfMembers(article)}} read.</span></div>',
    restrict: 'E',
  
  };
}); 
	/**/
'use strict';

ArticlyApp.controller('ArticleCtrl', function($scope, articles) {
  $scope.articles = articles;

	$scope.getArticleById = function(id){
	  angular.forEach($scope.articles, function(article){
	    if(article.id == id)
	      return article;
	  });
	};

	$scope.setCurrentArticle = function(id){

	angular.forEach($scope.articles, function(article){

	  if(article.id == id)
	      $scope.currArt = article;

	});
	};

	$scope.currentArticle = function(){

	return $scope.currArt;
	};

	$scope.numberOfMembers = function(article){

	return article.members.length;
	};

	$scope.addArticle = function() {
	var about = $scope.articleAbout;
	var text = $scope.articleText;
	var link = $scope.articleLink;

	$scope.articles.push(
	  {
	    id:$scope.articles.length+1, 
	    text:text==''?'uten navn':text, 
	    link:link==''?'uten navn':link,
	    about:about==''?'uten navn':about, 
	    author:'are', 
	    members:[{
	        name:"are",
	        done:false
	      },{
	        name:"kenneth",
	        done:false
	      },{
	        name:"TC",
	        done:false
	      },{
	        name:"erich",
	        done:false
	  }
	  ],addDate:new Date()});
	$scope.articleText = '';
	$scope.articleLink = '';
	$scope.articleAbout = '';
	};

	$scope.remainingArticles = function() {
	var count = 0;
	angular.forEach($scope.articles, function(article) {
	  
	  if(article.read)  
	      count += 1;

	});
	return count;
	};

	$scope.remainingArticles = function() {
	var count = 0;
	angular.forEach($scope.articles, function(article) {
	  
	  if(article.read)  
	      count += 1;

	});
	return count;
	};

	$scope.remainingRead = function(article){
	  var count = 0;
	  angular.forEach(article.members, function(member){
	    count += member.done?1:0;
	  });
	  article.read = count==article.members.length?true:false;
	  return count;
	};

	$scope.archive = function() {
	var oldArticles = $scope.articles;
	$scope.articles = [];
	angular.forEach(oldArticles, function(article) {
	  if (!article.read) $scope.articles.push(article);
	});
	};

});

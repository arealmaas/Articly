function articleCtrl($scope){
	
  $scope.articles = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];
 
  $scope.addArticle = function() {
    $scope.articles.push({text:$scope.articleText, done:false});
    $scope.articleText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.articles, function(article) {
      count += article.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldArticles = $scope.articles;
    $scope.articles = [];
    angular.forEach(oldArticles, function(article) {
      if (!article.done) $scope.articles.push(article);
    });
  };


}
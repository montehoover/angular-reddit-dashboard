var redditApp = angular.module("RedditApp", []);

redditApp.controller("HomeCtrl", ['$scope', '$http', function($scope, $http) {

  $scope.searchTerm = ''

  $scope.history = []

  $scope.results = {}

  $scope.search = function() {
    $scope.history.push($scope.searchTerm)

    var req = {
      url: "http://www.reddit.com/search.json",
      method: "GET",
      params: {
        q: $scope.searchTerm
      }
    }
    
    $http(req).then(function success(res) {
      var redditData = res.data;
      $scope.results = redditData.data.children;
      console.log(redditData.data.children)
    }, function error(res) {
      console.log(res)
    })
  }



}])

console.log('this file is running.');
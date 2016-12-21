var app = angular.module('hoist');

app.controller('homeCtrl', ['$scope', 'dataService', '$state', function($scope, dataService, $state) {

  //  var getAppMarket = function(){
  //   // $scope.appMarket = dataService.getData();
  // }();
  $scope.$state = $state;

  console.log($state);

  $scope.showObj = {
    showSubs: true,
    showMarket: false,
    showComing: false
  }

  $scope.toggleViews = function(view) {
    if(view === 'subscriptions') {
      $scope.showObj.showSubs = true,
      $scope.showObj.showMarket = false,
      $scope.showObj.showComing = false
    }
    if(view === 'marketplace') {
      $scope.showObj.showSubs = false,
      $scope.showObj.showMarket = true,
      $scope.showObj.showComing = false
    }
    if(view === 'comingSoon') {
      $scope.showObj.showSubs = false,
      $scope.showObj.showMarket = false,
      $scope.showObj.showComing = true
    }
  };




}]); //end MainCtrl

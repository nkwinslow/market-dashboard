var app = angular.module('hoist', ['ui.router']);

app.config([

  "$stateProvider",
  "$urlRouterProvider",

  function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('homepage', {
      url: '/',
      views:{
        '':{
          templateUrl: './views/homepage.html',
          controller: 'homeCtrl',
        },


        'subscriptions@homepage':{
          templateUrl:'./views/subscriptions.html',
          resolve: {
            subscriptions: function(dataService){
              return dataService.getSubs();
            }
          },
          controller:function($scope, subscriptions){
            $scope.subscriptions = subscriptions;
          }
        },


        'marketplace@homepage':{
          templateUrl:'./views/marketplace.html',
          resolve: {
            marketplace: function(dataService){
              return dataService.getData();
            }
          },
          controller:function($scope, marketplace){
            $scope.marketplace = marketplace;
          }
        },


        'comingSoon@homepage':{
          templateUrl:'./views/comingSoon.html',
          resolve: {
            comingSoon: function(dataService){
              return dataService.getSoon();
            }
          },
          controller:function($scope, comingSoon){
            $scope.comingSoon = comingSoon;
          }
        },
      },

      resolve: {
        getApp: function(dataService, $stateParams) {
          var appID = $stateParams.id;
          return dataService.getApp(appID);
        }
      }
    })
    // .state('account', {
    //   url: "/account",
    //   templateUrl: "./views/account.html",
    //   controller: 'accountCtrl'
    // })
    .state('account', {
      url: '/account',
      views:{
        '':{
          templateUrl: './views/account.html',
          controller: 'accountCtrl',
        },


        'appSettings@account':{
          templateUrl:'./views/appSettings.html'
        },
        'payment@account':{
          templateUrl: './views/payment.html',
          // resolve: {
          //   plans: function(dataService){
          //     return dataService.getBraintreePlans();
          //   }
          // },
          // controller:function($scope, plans){
          //   $scope.plans = plans;
          // }
        }
      }
    })


}]);//end config

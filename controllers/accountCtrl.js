var app = angular.module('hoist');

app.controller('accountCtrl', ['$scope', 'dataService', function($scope, dataService) {


  	// var braintree = Braintree.create("YourClientSideEncryptionKey")
   //     	braintree.onSubmitEncryptForm('braintree-payment-form');

   

    $scope.showObj = {
    	showSettings: true,
    	showPayment: false,
  	}

  	$scope.toggleViews = function(view) {
    	if(view === 'appSettings') {
      		$scope.showObj.showSettings = true,
      		$scope.showObj.showPayment = false
    	}
    	if(view === 'payment') {
      		$scope.showObj.showSettings = false,
      		$scope.showObj.showPayment = true
    	}
    };

}]); //end accountCtrl

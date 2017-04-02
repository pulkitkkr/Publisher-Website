angular.module('main')
.controller('ToggleCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
	$scope.Name = $rootScope.contact;
	$scope.navbarCollapsed = true;
	$scope.toggleContact = function(){
		alert($scope.Name);
	};
	 
}])
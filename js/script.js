
var applic = angular.module('app', ['ngRoute','ngAnimate','signin']);
	applic.config(['$routeProvider',
	  function($routeProvider) {
		$routeProvider.
		  when('/home', {
			templateUrl: 'include/home.html'
		  }).
		  when('/login', {
			templateUrl: 'include/login.html'
		  }).
		  when('/user', {
			templateUrl: 'include/user.html'
		  }).
		  when('/signup', {
			templateUrl: 'include/signup.html'
		  }).
		  otherwise({
			redirectTo: '/home'
		  });
	  }]);
	applic.controller("mainCtrl",['$rootScope','$scope','$http','$interval','$location','$anchorScroll',function($rootScope,$scope,$http,$interval,$location,$anchorScroll){
		
		$scope.user = 'امیر موسوی';
		$http.post('config/admin.php').success(function(data){
			$scope.username = data;
			if($scope.username){
				$rootScope.loggedInUser = $scope.username;
				$location.path("/home");
				}
			
		  });
		$scope.login = function(user,pass) {
			
			$location.path("/persons");
			$http.get('config/admin.php?user='+user+'&pass='+pass).success(function(data){
				$scope.username = data;
				if($scope.username){
					$rootScope.loggedInUser = $scope.username;
					$location.path("/home");
					}
				else{
					$scope.error = true;
					}
			  });
			
		  };
		$scope.logout = function(){
				$scope.username = false;
				$http.post('config/logout.php')
				$rootScope.loggedInUser = null;
			}
		
		
		$http.post('config/alexa.php').success(function(data){
			$scope.alexa = data;
			
			
		  });	
		

}]);
applic.run(function($rootScope, $location) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ($rootScope.loggedInUser == null) {
        // no logged user, redirect to /login
        if ( next.templateUrl === "include/login.html") {
        } else {
          $location.path("/login");
        }
      }
    });
  });

	

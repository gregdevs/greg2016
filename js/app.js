var gregApp = angular.module('gregApp', ['ngRoute', 'ngAnimate', 'angular-carousel']);
gregApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeCtrl',
		animation: 'first'

	})
	.when('/what-do-i-do', {
		templateUrl: 'views/what-do-i-do.html',
		animation: 'second'
	})
	.when('/work', {
		templateUrl: 'views/work.html',
		animation: 'third',
		controller: 'workCtrl'
	})
	.when('/work/projects/:id',{
		templateUrl:'views/project.html',
		animation: 'fourth',
		controller:'projectCtrl'
	});
})

gregApp.filter('trusthtml', ['$sce', function($sce) {
  return function(t) {
    return $sce.trustAsHtml(t)
  }
}]);


var gregApp = angular.module('gregApp', ['ngRoute', 'ngAnimate']);
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
	});
})




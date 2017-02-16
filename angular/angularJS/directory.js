angular.module('directoryApp', [])
	.controller('directoryController', function($scope) {
		$scope.list = [
			{name:'Akbar', age: 24},
			{name:'Joe', age: 25},
			{name:'Jacky', age: 23},
			{name:'Bell', age: 21}
		]
	});
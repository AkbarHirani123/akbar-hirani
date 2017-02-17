angular.module('directoryApp', [])
	.controller('directoryController', function($scope) {
		$scope.list = [
			{name:'Akbar', age: 24},
			{name:'Joe', age: 25},
			{name:'Jacky', age: 23},
			{name:'Bell', age: 21}
		];

		$scope.addPerson = function() {
			$scope.list.push({name: $scope.name, age: $scope.age});
			$scope.name='';
			$scope.age=null;
		};
	});
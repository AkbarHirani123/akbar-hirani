angular.module('directoryApp', [])
	.controller('directoryController', function() {
		var dirList = this;
		dirList.list = [
			{name:'Akbar', age: 24},
			{name:'Joe', age: 25},
			{name:'Jacky', age: 23},
			{name:'Bell', age: 21}
		];

		dirList.addPerson = function() {
			dirList.list.push({name: dirList.name, age: dirList.age});
			dirList.name='';
			dirList.age=null;
		};
		/*if(checkAge && checkName) {
			dirList.order = [
				{'dirList.name'},
				{'dirList.age'}
			];
		}else if(checkName && !checkAge) {
			dirList.order = [
				{'dirList.name'}
			];
		}else if(!checkName && checkAge) {
			dirList.order = [
				{'dirList.age'}
			];
		}else {
			dirList.order = [];
		}*/
	/* INCORRECT PRACTICE TO USE SCOPE
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
		};*/
	});
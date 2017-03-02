angular.module('directoryApp', ['ngAnimate', 'ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('fromLeft', {
				url: '/fromLeft',
				templateUrl: 'fromLeft.html',
				controller: 'directoryController as dirList'
			})
			.state('fromRight', {
				url: '/fromRight',
				templateUrl: 'fromRight.html',
				controller: 'directoryController as dirList'
			});
	})

	.controller('directoryController', function() {
		var dirList = this;
		dirList.list = [
			{name:'Akbar', age: 24, img: '../assets/imgs/1.jpg'},
			{name:'Joe', age: 25, img: '../assets/imgs/2.jpg'},
			{name:'Jacky', age: 23, img: '../assets/imgs/3.jpg'},
			{name:'Bell', age: 21, img: '../assets/imgs/4.jpg'}
		];

		dirList.addPerson = function() {
			dirList.list.push({name: dirList.name, age: dirList.age});
			dirList.name='';
			dirList.age=null;
			dirList.limit = dirList.list.length;
		};

		dirList.limit = dirList.list.length;

		dirList.toggle = true;
		dirList.changeClass = function (){
	        if(dirList.class =='right') dirList.class = 'left';
	        else if(dirList.class =='left') dirList.class = 'right';
	        else dirList.class = 'right';
	    }

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
	})
	.directive('helloWorld', function(){
		return {
			template: 'Hello World!'
		}
	});
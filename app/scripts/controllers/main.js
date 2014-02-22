'use strict';

angular.module('cktonggithubioApp')
  .controller('MainCtrl', function ($scope, $interval) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

		var pictures = ['kyoto', 'palace', 'rain'];
		var len = pictures.length;
		var i = Math.floor(Math.random()*len);

		$scope.BackgroundClass=pictures[i];

		function changeBackground(){

			if(i<len-1){i++;}
			else if(i>=len-1){
				i=0;
			}

			$scope.BackgroundClass=pictures[i];
		}

		$interval(changeBackground, 4000);
  });

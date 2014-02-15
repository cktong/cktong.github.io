'use strict';

angular.module('cktonggithubioApp')
  .controller('MainCtrl', function ($scope, $interval) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

		var pictures = ['kyoto', 'palace', 'rain', 'blank'];
		var len = pictures.length-1;
		var i = 0;

		$scope.BackgroundClass='blank';

		function changeBackground(){

			$scope.BackgroundClass=pictures[i];
			if(i<len){i++;}
			else if(i>=len){
				i=0;
			}
		}

		$interval(changeBackground, 4000);


  });

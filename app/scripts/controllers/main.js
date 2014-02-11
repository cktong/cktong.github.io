'use strict';

angular.module('cktonggithubioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

		var pictures = ['blank','kyoto', 'palace', 'rain'];
		// var len = pictures.length;

		// for (var i=0; i<len; i++){
	 //    	$scope.BackgroundClass= pictures[i];
		// }

		$scope.BackgroundClass=pictures[2];
  });

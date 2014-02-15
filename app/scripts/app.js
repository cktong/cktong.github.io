'use strict';

angular.module('cktonggithubioApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/travel', {
        templateUrl: 'views/travel.html',
        controller: 'TravelCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
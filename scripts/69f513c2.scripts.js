"use strict";angular.module("cktonggithubioApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/travel",{templateUrl:"views/travel.html",controller:"TravelCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("cktonggithubioApp").controller("MainCtrl",["$scope","$interval",function(a,b){function c(){a.BackgroundClass=d[f],e>f?f++:f>=e&&(f=0)}a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"];var d=["kyoto","palace","rain","blank"],e=d.length-1,f=0;a.BackgroundClass="blank",b(c,4e3)}]),angular.module("cktonggithubioApp").controller("AboutCtrl",["$scope",function(a){a.BackgroundClass="bridge"}]),angular.module("cktonggithubioApp").controller("TravelCtrl",["$scope",function(a){a.BackgroundClass="",console.log(d3.version)}]);
"use strict";

var app = angular.module("MyApp", ['ngMaterial', 'ngRoute']);
app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/view1", {templateUrl: "partials/view1.html"});
    $routeProvider.when("/view2", {templateUrl: "partials/view2.html"});
    $routeProvider.when("/view3", {templateUrl: "partials/view3.html"});
    $routeProvider.otherwise({redirectTo: "/view1"});
}]);
var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
      when("/francis", {
        templateUrl: "/views/partials/francis.html",
        controller: "francisController"
      }).
      when("/claire", {
        templateUrl: "/views/partials/claire.html",
        controller: "claireController"
      }).
      when("/doug", {
        templateUrl: "/views/partials/doug.html",
        controller: "dougController"
      }).
      otherwise({
        redirectTo: "/view/partials/nav.html"
      });
}]);


myApp.controller("francisController", ["$scope", function($scope){
    console.log("francis");
}]);

myApp.controller("claireController", ["$scope", function($scope){
    console.log("claire");
}]);

myApp.controller("dougController", ["$scope", function($scope){
    console.log("doug");
}]);

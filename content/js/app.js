app = angular.module("app", ["ngRoute"]);

app.config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("!");

    $routeProvider
      .when("/home", {
        templateUrl: "views/home.html",
      })
      .when("/list", {
        templateUrl: "views/list.html",
        controller: "controller1",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);

app.controller("controller1", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http.get("content/data/peoples.json").then(function (response) {
      $scope.peoples = response.data;
    });

    $scope.remove = function (people) {
      var index = $scope.peoples.indexOf(people);
      $scope.peoples.splice(index, 1);
    };

    $scope.add = function () {
      $scope.peoples.push({
        name: $scope.new.name,
        age: $scope.new.age,
        fee: $scope.new.fee,
        available: true,
      });

      $scope.new.name = "";
      $scope.new.age = "";
      $scope.new.fee = "";
    };
  },
]);

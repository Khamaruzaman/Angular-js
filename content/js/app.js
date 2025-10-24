app = angular.module("app", ['ngRoute']);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: "views/home.html"
        })
        .when('/list', {
            templateUrl: "views/list.html",
            controller: "cont2"
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);
app.controller("cont2", ["$scope", function ($scope) {

    $scope.remove = function (n) {
        var index = $scope.arr.indexOf(n);
        $scope.arr.splice(index, 1);
    };

    $scope.add = function () {
        $scope.arr.push({
            name: $scope.new.name,
            age: $scope.new.age,
            fee: $scope.new.fee,
            available: true
        });

        $scope.new.name = "";
        $scope.new.age = "";
        $scope.new.fee = "";
    };

    $scope.arr = [
        { name: 'John', age: 30, fee: 50.00, available: true, dp: 'content/img/dp.png' },
        { name: 'Jane', age: 25, fee: 45.00, available: true, dp: 'content/img/dp.png' },
        { name: 'Mike', age: 42, fee: 65.50, available: true, dp: 'content/img/dp.png' },
        { name: 'Emily', age: 28, fee: 60.00, available: true, dp: 'content/img/dp.png' },
        { name: 'David', age: 35, fee: 55.25, available: true, dp: 'content/img/dp.png' }
    ];
}])

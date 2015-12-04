var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "/assets/views/routes/home.html",
            controller: "SomeController"
        }).
        when('/code', {
            templateUrl: "/assets/views/routes/code.html",
            controller: "AnotherController"
        }).
        when('/projects', {
            templateUrl: "/assets/views/routes/projects.html",
            controller: "ThirdController"
        }).
        otherwise({
           redirectTo: 'home'
        })
}]);



myApp.controller('SomeController', ['$scope', function($scope){
    console.log('ang works');
    $scope.hello = "some controller";
}]);

myApp.controller('AnotherController', ['$scope', function($scope){

    $scope.hello = "another controller";
}]);

myApp.controller('ThirdController', ['$scope', function($scope){
    $scope.hello = "third controller"
}]);
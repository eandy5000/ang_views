var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "/assets/views/routes/home.html",
            controller: "SomeController"
        }).
        when('/game', {
            templateUrl: "/assets/views/routes/game.html",
            controller: "AnotherController"
        }).
        when('/high', {
            templateUrl: "/assets/views/routes/high.html",
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

    $scope.players = [

        {
            Name: "Andy",
            games: 34,
            wins: 7,
            streak: 2
        },
        {
            Name: "Lisa",
            games: 134,
            wins: 40,
            streak: 0
        },   {
            Name: "Tommy",
            games: 7,
            wins: 7,
            streak: 7
        },   {
            Name: "Alice",
            games: 134,
            wins: 17,
            streak: 2
        },   {
            Name: "Miss",
            games: 222,
            wins:100,
            streak: 12
        },   {
            Name: "Eric",
            games: 19,
            wins: 7,
            streak: 4
        },   {
            Name: "Jane",
            games:80,
            wins: 30,
            streak: 1
        },   {
            Name: "Becca",
            games: 34,
            wins: 7,
            streak: 2
        },   {
            Name: "Mary",
            games:240,
            wins: 99,
            streak: 6
        },   {
            Name: "Frank",
            games: 134,
            wins: 5,
            streak: 2
        },   {
            Name: "John",
            games: 50,
            wins: 25,
            streak: 21
        }


    ];

}]);
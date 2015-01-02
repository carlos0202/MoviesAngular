(function (app) {

    var ListController = function ($scope) {
        $scope.message = "Hello, World!";
    };
    app.controller("ListController", ListController);

}(angular.module("MoviesAngular")));
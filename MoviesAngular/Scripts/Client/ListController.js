(function (app) {

    var ListController = function ($scope, movieService) {
        movieService
            .getAll()
            .success(function (data) {
                $scope.movies = data;
            });
        $scope.message = "Hello, World!";
    };
    app.controller("ListController", ListController);

}(angular.module("MoviesAngular")));
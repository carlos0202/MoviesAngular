﻿(function (app) {

    var ListController = function ($scope, movieService) {
        movieService
            .getAll()
            .success(function (data) {
                $scope.movies = data;
            });
        //$scope.message = "Hello, World!";

        $scope.delete = function (movie) {
            movieService.delete(movie)
            .success(function () {
                removeMovieById(movie.Id);
            });
        };
        var removeMovieById = function (id) {
            for (var i = 0; i < $scope.movies.length; i++) {
                if ($scope.movies[i].Id == id) {
                    $scope.movies.splice(i, 1);
                    break;
                }
            }
        };
        $scope.create = function () {
            $scope.edit = {
                movie: {
                    Title: "",
                    Runtime: 0,
                    ReleaseYear: new Date().getFullYear()
                }
            };
        };

    };

    app.controller("ListController", ListController);

}(angular.module("MoviesAngular")));
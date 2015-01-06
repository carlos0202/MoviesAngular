(function(app) {
	var DetailsController = function($scope, movieService, $routeParams) {
		var id = $routeParams.id;
		movieService
			.getById(id)
			.success(function (data) {
				$scope.movie = data;
			});
	};

	app.controller("DetailsController", DetailsController);
}(angular.module("MoviesAngular")));
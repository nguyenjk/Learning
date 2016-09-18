var UsersController = function ($scope, UsersFactory) {
  UsersFactory()
  .then(function (response) {
    $scope.values = response;
  }, function (response) {
    // Handle errors here
  });
}

UsersController.$inject = ["$scope", "UsersFactory"];
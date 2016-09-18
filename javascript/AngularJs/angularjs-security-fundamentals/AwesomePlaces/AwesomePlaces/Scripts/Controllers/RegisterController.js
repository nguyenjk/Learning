var RegisterController = function ($scope, $location, LoginFactory, RegisterFactory, SessionService) {
  $scope.registerForm = {
    name: undefined,
    username: undefined,
    password: undefined,
    confirmPassword: undefined,
    errors: undefined
  };

  $scope.register = function () {
    RegisterFactory($scope.registerForm.name, $scope.registerForm.username, $scope.registerForm.password, $scope.registerForm.confirmPassword)
    .then(function () {
      LoginFactory($scope.registerForm.username, $scope.registerForm.password)
      .then(function (response) {
        SessionService.setToken(response.access_token);
        $location.path("/");
      }, function () {
        // Handle errors here
      });
    }, function (response) {
      var errors = [];

      var modelState = response.ModelState;
      for (var key in modelState) {
        if (modelState.hasOwnProperty(key)) {
          errors.push(modelState[key][0]);
        }
      }

      if (errors.length === 0) {
        // Handle errors here
      }

      $scope.registerForm.errors = errors;
    });
  }
}

RegisterController.$inject = ["$scope", "$location", "LoginFactory", "RegisterFactory", "SessionService"];
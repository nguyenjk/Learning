var BaseController = function ($scope, SessionService) {
  $scope.models = {
    pageTitle: "Welcome to Awesome Places!"
  };

  $scope.loggedIn = function () {
    return SessionService.getToken() !== undefined;
  }

  $scope.isAdmin = function () {
    return SessionService.getIsAdmin();
  }

  $scope.getEmail = function () {
    return SessionService.getEmail();
  }

  $scope.logMeOut = function() {
    SessionService.deleteToken();
  }

  $scope.navbarProperties = {
    isCollapsed: true
  };
}

BaseController.$inject = ["$scope", "SessionService"];
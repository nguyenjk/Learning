var UsersFactory = function ($http, $q, SessionService) {
  return function () {
    var result = $q.defer();

    $http({
      method: "GET",
      url: "/api/admin/users",
      headers: { "Authorization": "Bearer " + SessionService.getToken() }
    })
    .success(function (response) {
      result.resolve(response);
    })
    .error(function (response) {
      result.reject(response);
    });

    return result.promise;
  }
}

UsersFactory.$inject = ["$http", "$q", "SessionService"];
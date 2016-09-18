var LogoutFactory = function ($http, $q) {
  return function (awesomePlacesAppToken) {
    var result = $q.defer();

    $http({
      method: "GET",
      url: "/api/Account/Logout",
      headers: { "Authorization": "Bearer " + awesomePlacesAppToken }
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

LogoutFactory.$inject = ["$http", "$q"];
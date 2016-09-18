var CountriesFactory = function ($http, $q) {
  return function () {
    var result = $q.defer();

    $http({
      method: "GET",
      url: "/api/Countries"
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

CountriesFactory.$inject = ["$http", "$q"];
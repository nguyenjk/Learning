var AwesomePlacesFactory = function ($http, $q) {
  return function () {
    var result = $q.defer();

    $http({
      method: "GET",
      url: "/api/AwesomePlaces"
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

AwesomePlacesFactory.$inject = ["$http", "$q"];
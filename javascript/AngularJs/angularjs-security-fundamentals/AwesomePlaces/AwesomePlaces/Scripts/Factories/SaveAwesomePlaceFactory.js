var SaveAwesomePlaceFactory = function ($http, $q, SessionService) {
  return function (id, countryId, placeName, placeDescription) {
    var result = $q.defer();

    $http({
      method: id === undefined ? "POST" : "PUT",
      url: "/api/awesomeplaces",
      data: { Id: id, CountryId: countryId, PlaceName: placeName, Description: placeDescription },
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + SessionService.getToken() }
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

SaveAwesomePlaceFactory.$inject = ["$http", "$q", "SessionService"];

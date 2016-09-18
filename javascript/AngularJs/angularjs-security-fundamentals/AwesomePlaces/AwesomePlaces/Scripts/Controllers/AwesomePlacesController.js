var AwesomePlacesController = function ($scope, CountriesFactory, AwesomePlacesFactory, SaveAwesomePlaceFactory) {
  $scope.addForm = {
    id: undefined,
    country: undefined,
    placeName: undefined,
    placeDescription: undefined,
    itemIndex: undefined,
    success: undefined
  };

  AwesomePlacesFactory()
  .then(function (response) {
    $scope.AwesomePlaces = response;
  }, function (response) {
    // Handle errors here
  });

  CountriesFactory()
  .then(function (response) {
    $scope.Countries = response;
  }, function (response) {
    // Handle errors here
  });

  $scope.save = function () {
    $scope.addForm.success = undefined;

    SaveAwesomePlaceFactory($scope.addForm.id, $scope.addForm.country.Id, $scope.addForm.placeName, $scope.addForm.placeDescription)
    .then(function (response) {
      if ($scope.addForm.id === undefined) {
        $scope.AwesomePlaces.unshift(response);
      } else {
        $scope.AwesomePlaces[$scope.addForm.itemIndex] = response;
      }

      $scope.addForm.id = undefined;
      $scope.addForm.country = undefined;
      $scope.addForm.placeName = undefined;
      $scope.addForm.placeDescription = undefined;
      $scope.addForm.itemIndex = undefined;
      $scope.addForm.success = true;
    }, function (response) {
      // Handle errors here
    });
  }

  $scope.edit = function (awesomePlace) {
    $scope.addForm.id = awesomePlace.Id;
    $scope.addForm.country = awesomePlace.Country;
    $scope.addForm.placeName = awesomePlace.PlaceName;
    $scope.addForm.placeDescription = awesomePlace.Description;
    $scope.addForm.itemIndex = $scope.AwesomePlaces.indexOf(awesomePlace);
  }
}

AwesomePlacesController.$inject = ["$scope", "CountriesFactory", "AwesomePlacesFactory", "SaveAwesomePlaceFactory"];
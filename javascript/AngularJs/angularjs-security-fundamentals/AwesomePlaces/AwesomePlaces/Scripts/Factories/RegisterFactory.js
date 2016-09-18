var RegisterFactory = function ($http, $q) {
  return function (name, email, password, confirmPassword) {
    var result = $q.defer();

    $http({
      method: "POST",
      url: "/api/Account/register",
      data: { Name: name, Email: email, Password: password, ConfirmPassword: confirmPassword },
      headers: { "Content-Type": "application/json" }
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

RegisterFactory.$inject = ["$http", "$q"];
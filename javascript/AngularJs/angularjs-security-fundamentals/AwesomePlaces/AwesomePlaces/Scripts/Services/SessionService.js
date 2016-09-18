var SessionService = function ($cookies, LogoutFactory) {
  this.token = undefined;
  this.email = undefined;
  this.isAdmin = false;

  this.getToken = function () {
    if (!$cookies.awesomePlacesAppToken) {
      if (!this.token) {
        return undefined;
      }
      this.setUserData(this.token, this.isAdmin, this.email);
    }
    return $cookies.awesomePlacesAppToken;
  }

  this.getEmail = function () {
    if (!$cookies.email) {
      if (!this.email) {
        return undefined;
      }
      this.setUserData(this.token, this.isAdmin, this.email);
    }
    return $cookies.email;
  }

  this.getIsAdmin = function () {
    if (!$cookies.isAdmin) {
      if (!this.isAdmin) {
        return undefined;
      }
      this.setUserData(this.token, this.isAdmin, this.email);
    }
    return $cookies.isAdmin;
  }

  this.setUserData = function (token, isAdmin, email) {
    this.token = token;
    this.email = email;
    this.isAdmin = isAdmin;

    $cookies.awesomePlacesAppToken = token;
    $cookies.email = email;

    if (isAdmin) {
      $cookies.isAdmin = isAdmin;
    }
  }

  this.deleteToken = function () {
    this.token = undefined;
    LogoutFactory($cookies.awesomePlacesAppToken)
    .then(function () {
      document.cookie = "awesomePlacesAppToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
      document.cookie = "isAdmin=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
      document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    }, function (response) {
      // Handle errors here
    });
  }
}

SessionService.$inject = ["$cookies", "LogoutFactory"];
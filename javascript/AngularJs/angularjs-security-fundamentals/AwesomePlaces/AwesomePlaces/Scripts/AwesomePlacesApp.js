var AwesomePlacesApp = angular.module("AwesomePlacesApp", ["ngRoute", "ui.bootstrap", "ngCookies", "ngSanitize"]);

AwesomePlacesApp.controller("LoginController", LoginController);
AwesomePlacesApp.controller("RegisterController", RegisterController);
AwesomePlacesApp.controller("BaseController", BaseController);
AwesomePlacesApp.controller("UsersController", UsersController);
AwesomePlacesApp.controller("AwesomePlacesController", AwesomePlacesController);

AwesomePlacesApp.service("SessionService", SessionService);

AwesomePlacesApp.factory("LoginFactory", LoginFactory);
AwesomePlacesApp.factory("LogoutFactory", LogoutFactory);
AwesomePlacesApp.factory("RegisterFactory", RegisterFactory);
AwesomePlacesApp.factory("UsersFactory", UsersFactory);
AwesomePlacesApp.factory("AwesomePlacesFactory", AwesomePlacesFactory);
AwesomePlacesApp.factory("SaveAwesomePlaceFactory", SaveAwesomePlaceFactory);
AwesomePlacesApp.factory("CountriesFactory", CountriesFactory);

var configFunction = function ($routeProvider, $locationProvider, $sceProvider) {
  $locationProvider.hashPrefix("!").html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider
    .when("/", {
      templateUrl: "Views/Home/AwesomePlaces.html",
      controller: "AwesomePlacesController"
    })
    .when("/login", {
      templateUrl: "/Views/Account/Login.html",
      controller: "LoginController"
    })
    .when("/register", {
      templateUrl: "/Views/Account/Register.html",
      controller: "RegisterController"
    })
    .when("/users", {
      templateUrl: "Views/Admin/Users.html",
      controller: "UsersController"
    });

  //$sceProvider.enabled(false);
};

configFunction.$inject = ["$routeProvider", "$locationProvider", "$sceProvider"];
AwesomePlacesApp.config(configFunction);

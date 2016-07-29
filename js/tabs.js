angular.module('mainApp').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('welcome', {
          url: '/',
          templateUrl: '../views/welcome.html'
        })
        .state('howtoplay', {
          url: '/play',
          templateUrl: '../views/howtoplay.html'
        })
        .state('about', {
          url: '/about',
          templateUrl: '../views/about.html'
        });

    $urlRouterProvider
        .otherwise('/');

});

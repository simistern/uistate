// app.js

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partial-home.html'
    })
    .state('home.list', {
      url: '/list',
      templateUrl: "partial-home-list.html",
      controller: function($scope) {
        $scope.dogs = ['yabba', 'dabba', 'dooo']
      }
    })
    .state('home.paragraph', {
      url: '/paragraph',
      template: '<h3>I could really use a drink right now.</h3>'
    })
    .state('about', {
        url: '/about',
        views: {
            // the main template will be placed here (relatively named)
            '': { templateUrl: 'partial-about.html' },
            // the child views will be defined here (absolutely named)
            'columnOne@about': {
               template: 'Look I am a column!'
             },
            // for column two, we'll define a separate controller
            'columnTwo@about': {
                templateUrl: 'table-data.html',
                controller: 'scotchController'
            }
        }
    });
});

routerApp.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});

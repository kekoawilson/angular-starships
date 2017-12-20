angular.module('starships', ['ui.router'])
angular.module('starships').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/',
        // template: '<div>Home</div>'
        templateUrl: 'app/views/home/home.html',
    }).state('ships', {
        url: '/ships',
        // template: '<div>Ships View</div>'
        templateUrl: 'app/views/ships/ships.html',
        controller: 'shipsCtrl'
    }).state('ship', {
        url: '/ships/:id',
        // template: '<div>Ship Details</div>'
        templateUrl: 'app/views/ship/ship.html',
        controller: 'shipCtrl'
    })

    $urlRouterProvider.otherwise('/');
})
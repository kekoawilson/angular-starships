
angular.module('starships').controller('shipsCtrl', function($scope, shipSrvc){
    // $scope.ships = ['X-Wing', 'T-Fighter', 'Millenium Falcon', 'Death Star']
    
    $scope.getPage = page => {
        $scope.page=page
        shipSrvc.getStarships(page).then(ships => $scope.ships = ships)

    }

    $scope.getPage(shipSrvc.getLastPage())

})
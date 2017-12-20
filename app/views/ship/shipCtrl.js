
angular.module('starships').controller('shipCtrl', 
function($scope, $stateParams, shipSrvc){
    $scope.shipId = $stateParams.id
    shipSrvc.getStarship($stateParams.id).then(ship => $scope.ship = ship)
})
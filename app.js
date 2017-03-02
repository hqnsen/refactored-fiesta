angular.module('BuyBeasts', [])
.controller('mainCtrl', mainCtrl)
//.directive('beastDirective', beastDirective)

function mainCtrl($scope) {
    $scope.beasts = [];
        
    //$scope.beasts.push({name: 'Demiguise', price: 5000, quantity: 2});
    //$scope.beasts.push({name: 'Bowtruckle', price: 3500, quantity: 10});
    $scope.beasts.push(new Demiguise())
    $scope.beasts.push(new Bowtruckle())
    $scope.beasts.push(new Erumpent())
}

/*function beastDirective() {
    return {
        scope: {
            beast: '='
        },
        restrict: 'E',
        replace: 'true',
        template: (
            '{{beast.name}}'
        )
    };
} */

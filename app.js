angular.module('BuyBeasts', ['ui.router'])
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('all', {
                url: '/all',
                templateUrl: '/all',
                controller: 'mainCtrl'
            })
            .state('in-stock', {
                url: '/in-stock',
                templateUrl: '/in-stock',
                controller: 'mainCtrl'
            })
            .state('cart', {
                url: '/cart',
                templateUrl: '/cart',
                controller: 'mainCtrl'
            });
        $urlRouterProvider.otherwise('all');
    }
])
.controller('mainCtrl', mainCtrl);
//.directive('beastDirective', beastDirective);

function mainCtrl($scope) {
    $scope.beasts = [];
        
    //$scope.beasts.push({name: 'Demiguise', price: 5000, quantity: 2});
    //$scope.beasts.push({name: 'Bowtruckle', price: 3500, quantity: 10});
    $scope.beasts.push(new Demiguise());
    $scope.beasts.push(new Bowtruckle());
    $scope.beasts.push(new Erumpent());

    $scope.beastInStock = function(beast) {
        return beast.quantity > 0;
    };

    $scope.beastsInStock = function() {
        return $scope.beasts.filter($scope.beastInStock);
    };
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

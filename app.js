// Finding list here: https://www.dailydot.com/parsec/list-of-fantastic-beasts/
// and here: http://harrypotter.wikia.com/wiki/Fantastic_Beasts_and_Where_to_Find_Them

class BeastInventoryItem {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class Demiguise extends BeastInventoryItem {
    constructor() {
        super('Demiguise', 5000, 2);
    }
}

class Bowtruckle extends BeastInventoryItem {
    constructor() {
        super('Bowtruckle', 3500, 10);
    }
}

class Erumpent extends BeastInventoryItem {
    constructor() {
        super('Erumpent', 4000, 0);
    }
}

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
        
    $scope.beasts.push(new Demiguise());
    $scope.beasts.push(new Bowtruckle());
    $scope.beasts.push(new Erumpent());

    $scope.beastInStock = function(beast) {
        return beast.quantity > 0;
    };

    $scope.beastsInStock = function() {
        return $scope.beasts.filter($scope.beastInStock);
    };

    $scope.sorts = [
        {name: 'Name', value: 'name'},
        {name: 'Price High to Low', value: '-price'},
        {name: 'Price Low to High', value: 'price'},
        {name: 'Quantity in Stock', value: '-quantity'}
    ];
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

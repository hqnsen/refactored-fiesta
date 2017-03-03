// Finding list here: https://www.dailydot.com/parsec/list-of-fantastic-beasts/
// and here: http://harrypotter.wikia.com/wiki/Fantastic_Beasts_and_Where_to_Find_Them

class BeastInventoryItem {
    constructor(name, price, quantity,img) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.inCart = 0
        this.img = img;
    }
    decrementQuantity() {
        this.quantity--
    }
    moveToCart() {
        if (this.quantity > 0) {
            this.quantity--
            this.inCart++
        }
    }
    removeFromCart() {
        if (this.inCart > 0) {
            this.quantity++
            this.inCart--
        }
    }
}

class Demiguise extends BeastInventoryItem {
    constructor() {
        super('Demiguise', 5000, 2,'img/demiguise.jpg');
    }
}

class Graphorn extends BeastInventoryItem {
    constructor() {
        super('Graphorn', 5, 2,'img/graphorn.jpg');
    }
}

class Niffler extends BeastInventoryItem {
    constructor() {
        super('Niffler', 3000, 2,'img/Niffler.jpg');
    }
}

class Nundu extends BeastInventoryItem {
    constructor() {
        super('Nundu', 5000, 2,'img/nundu.jpg');
    }
}

class Occamy extends BeastInventoryItem {
    constructor() {
        super('Occamy', 5000, 2,'img/occamy.jpg');
    }
}

class Pixie extends BeastInventoryItem {
    constructor() {
        super('Pixie', 5000, 2,'img/Pixie.jpg');
    }
}

class Thunderbird extends BeastInventoryItem {
    constructor() {
        super('Thunderbird', 5000, 2,'img/Thunderbird.jpg');
    }
}

class Bowtruckle extends BeastInventoryItem {
    constructor() {
        super('Bowtruckle', 3500, 10,'img/bowtruckles.jpg');
    }
}

class Erumpent extends BeastInventoryItem {
    constructor() {
        super('Erumpent', 4000, 0, 'img/Erumpent.jpg');
    }
}

angular.module('BuyBeasts', ['ui.router'])
.factory('beastFactory', function() {
    var beastScope = {}
    beastScope.beasts = []
        
    beastScope.beasts.push(new Demiguise());
    beastScope.beasts.push(new Bowtruckle());
    beastScope.beasts.push(new Erumpent());
    beastScope.beasts.push(new Graphorn());
    beastScope.beasts.push(new Niffler());
    beastScope.beasts.push(new Nundu());
    beastScope.beasts.push(new Occamy());
    beastScope.beasts.push(new Pixie());
    beastScope.beasts.push(new Thunderbird());

    return beastScope
})
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
.controller('mainCtrl', ['$scope', 'beastFactory', mainCtrl]);

function mainCtrl($scope, beastFactory) {
    //$scope.beasts = [];
    $scope.beasts = beastFactory.beasts

    $scope.beastInStock = function(beast) {
        return beast.quantity > 0;
    };
    $scope.beastInCart = function(beast) {
        return beast.inCart > 0
    }

    $scope.beastsInStock = function() {
        return $scope.beasts.filter($scope.beastInStock);
    };

    $scope.beastsInCart = function() {
        return $scope.beasts.filter($scope.beastInCart)
    }

    $scope.sorts = [
        {name: 'Name', value: 'name'},
        {name: 'Price High to Low', value: '-price'},
        {name: 'Price Low to High', value: 'price'},
        {name: 'Quantity in Stock', value: '-quantity'}
    ]
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

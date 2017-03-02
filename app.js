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
        this.quantity--
        this.inCart++
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

class nundu extends BeastInventoryItem {
    constructor() {
        super('nundu', 5000, 2,'img/nundu.jpg');
    }
}

class occamy extends BeastInventoryItem {
    constructor() {
        super('occamy', 5000, 2,'img/occamy.jpg');
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
    $scope.beasts.push(new Graphorn());
    $scope.beasts.push(new Niffler());
    $scope.beasts.push(new nundu());
    $scope.beasts.push(new occamy());
    $scope.beasts.push(new Pixie());
    $scope.beasts.push(new Thunderbird());


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

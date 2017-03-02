// Finding list here: https://www.dailydot.com/parsec/list-of-fantastic-beasts/
// and here: http://harrypotter.wikia.com/wiki/Fantastic_Beasts_and_Where_to_Find_Them

class BeastInventoryItem {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantityInStock = quantity
    }
}

class Demiguise extends BeastInventoryItem {
    constructor() {
        super('Demiguise', 5000, 2)
    }
}

class Bowtruckle extends BeastInventoryItem {
    constructor() {
        super('Bowtruckle', 3500, 10)
    }
}

class Erumpent extends BeastInventoryItem {
    constructor() {
        super('Erumpent', 4000, 0)
    }
}

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

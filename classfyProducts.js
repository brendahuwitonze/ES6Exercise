// Classy Products: Create a class Product with properties name (string), price (number), and methods:
// getDetails(): Returns a string representation of the product details (name and price).
// applyDiscount(discount): Applies a discount (percentage) to the product's price and returns the discounted price.

class Product{
    constructor(name,price){
        this.name =name,
        this.price=price

    }
    getDetail(){
        return `The product is ${this.name} and the price ${this.price} frw`
    }
}

let newProduct = new Product('biscuits',2000)
console.log(newProduct.getDetail())

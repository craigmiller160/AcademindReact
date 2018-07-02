
export default class Ingredient {

    constructor(type, price) {
        this.type = type;
        this.price = price;
        this.label = type.charAt(0).toUpperCase() + type.substring(1);
    }

}
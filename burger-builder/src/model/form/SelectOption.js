
export default class SelectOption {
    constructor(value, displayValue) {
        this.value = value;
        this.displayValue = displayValue ? displayValue : value;
    }
}
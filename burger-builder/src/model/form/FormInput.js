import * as inputTypes from './InputTypes';

export default class FormInput {
    constructor(elementType, elementName, elementConfig, validation) {
        this.elementType = elementType;
        this.elementName = elementName;
        this.elementConfig = elementConfig;
        this.validation = validation;
        //Make valid true by default if there is no validation. Make it false by default if there is validation
        this.valid = validation === undefined || validation === null;
        switch (elementType) {
            case inputTypes.CHECK:
            case inputTypes.RADIO:
                this.value = false;
                break;
            case inputTypes.NUMBER:
                this.value = 0;
                break;
            case inputTypes.SELECT:
                if (elementConfig && elementConfig.options && elementConfig.options.length > 0) {
                    this.value = elementConfig.options[0].value;
                }
                else {
                    this.value = '';
                }
                break;
            case inputTypes.TEXT:
            case inputTypes.EMAIL:
            case inputTypes.PASSWORD:
            case inputTypes.TEXTAREA:
                this.value = '';
                break;
            default:
                throw new Error(`Invalid elementType: ${elementType}`);
        }
    }
}
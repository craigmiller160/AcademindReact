import FormInput from '../../../model/form/FormInput';
import * as inputTypes from '../../../model/form/InputTypes';
import SelectOption from '../../../model/form/SelectOption';

const contactDataOrderForm = [
    new FormInput(inputTypes.TEXT, 'name', {
        label: 'Name',
        placeholder: 'Your name'
    }, {
        required: true
    }),
    new FormInput(inputTypes.TEXT, 'street', {
        label: 'Street',
        placeholder: 'Your street'
    }, {
        required: true
    }),
    new FormInput(inputTypes.TEXT, 'zipCode', {
        label: 'Zip Code',
        placeholder: 'Your zip code'
    }, {
        required: true,
        minLength: 5,
        maxLength: 5
    }),
    new FormInput(inputTypes.TEXT, 'country', {
        label: 'Country',
        placeholder: 'Your country'
    }, {
        required: true
    }),
    new FormInput(inputTypes.EMAIL, 'email', {
        label: 'Email',
        placeholder: 'Your email'
    }, {
        required: true
    }),
    new FormInput(inputTypes.SELECT, 'deliveryMethod', {
        label: 'Delivery Method',
        options: [
            new SelectOption('fastest', 'Fastest'),
            new SelectOption('cheapest', 'Cheapest')
        ]
    })
];

export default contactDataOrderForm;
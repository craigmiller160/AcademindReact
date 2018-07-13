import React, { Component } from 'react';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Form/Input/Input';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    };

    orderBurgerHandler = () => {

    };

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <Input label="Name" type="text" name="name" placeholder="Your name" />
                    <Input label="Email" type="email" name="email" placeholder="Your email" />
                    <Input label="Street" type="text" name="street" placeholder="Your street" />
                    <Input label="Postal Code" type="text" name="postalCode" placeholder="Your postal code" />
                    <Button btnType="Success" clicked={this.orderBurgerHandler}>ORDER</Button>
                </form>
            </div>
        );
    }

}

export default ContactData;
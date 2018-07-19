import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import { ingredientsPropType } from '../../../model/ingredient/BurgerIngredients';
import axiosOrders from '../../../http/axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';
import Input from '../../../components/UI/Form/Input/Input';

class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your zip code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {
                            value: 'fastest',
                            displayValue: 'Fastest'
                        },
                        {
                            value: 'cheapest',
                            displayValue: 'Cheapest'
                        }
                    ]
                },
                value: ''
            }
        },
        loading: false
    };

    formInputChangeHandler = (event, name) => {
        const value = event.target.value;
        this.setState(prevState => {
            const orderForm = JSON.parse(JSON.stringify(prevState.orderForm));
            orderForm[name].value = value;
            return {orderForm};
        });
    };

    orderBurgerHandler = async event => {
        event.preventDefault();
        this.setState({loading: true}, this.addNewPurchase);
    };

    async addNewPurchase() {
        try {
            const order = {
                ingredients: this.props.ingredients,
                price: this.props.totalPrice,
                customer: {
                    name: 'Craig Miller',
                    address: {
                        street: 'Test street 1',
                        zipCode: '41351',
                        country: 'USA'
                    },
                    email: 'test@test.com'
                },
                deliveryMethod: 'fastest'
            };
            const res = await axiosOrders.post('/orders.json', order);
            console.log(res);
        }
        catch (ex) {
            console.log(ex);
        }
        finally {
            this.setState({loading: false});
            this.props.history.push('/');
        }
    }

    render() {
        const formInputs = Object.entries(this.state.orderForm)
            .map(entry => (
                <Input
                    key={entry[0]}
                    elementType={entry[1].elementType}
                    elementConfig={entry[1].elementConfig}
                    value={entry[1].value}
                    change={event => this.formInputChangeHandler(event, entry[0])} />
            ));

        let form = (
            <form>
                {formInputs}
                <Button btnType="Success" clicked={this.orderBurgerHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }

}

ContactData.propTypes = {
    ingredients: ingredientsPropType,
    totalData: PropTypes.number
};

export default withRouter(ContactData);
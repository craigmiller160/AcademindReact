import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actions from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    };

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    };



    render () {
        const resultElems = this.props.results.map((result, index) => (
            <li key={index} onClick={() => this.props.onDeleteResult(index)}>{result}</li>
        ));

        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {resultElems}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        results: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actions.INC_COUNTER}),
        onDecrementCounter: () => dispatch({type: actions.DEC_COUNTER}),
        onAddCounter: value => dispatch({type: actions.ADD_COUNTER, value}),
        onSubtractCounter: value => dispatch({type: actions.SUB_COUNTER, value}),
        onStoreResult: () => dispatch({type: actions.STORE_RESULT}),
        onDeleteResult: index => dispatch({type: actions.DELETE_RESULT, value: index})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actions from '../../store/actions/actions';

class Counter extends Component {
    state = {
        counter: 0
    };

    render () {
        const resultElems = this.props.results.map(result => (
            <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
        ));

        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul style={{listStyle: 'none'}}>
                    {resultElems}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter.counter,
        results: state.results.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actions.incCounter()),
        onDecrementCounter: () => dispatch(actions.decCounter()),
        onAddCounter: value => dispatch(actions.addCounter(value)),
        onSubtractCounter: value => dispatch(actions.subCounter(value)),
        onStoreResult: value => dispatch(actions.storeResult(value)),
        onDeleteResult: id => dispatch(actions.deleteResult(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
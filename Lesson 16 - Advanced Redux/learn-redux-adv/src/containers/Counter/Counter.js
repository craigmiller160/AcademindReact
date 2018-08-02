import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as counterActions from '../../store/actions/counter.actions';
import * as resultsActions from '../../store/actions/results.actions';

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
        onIncrementCounter: () => dispatch(counterActions.incCounter()),
        onDecrementCounter: () => dispatch(counterActions.decCounter()),
        onAddCounter: value => dispatch(counterActions.addCounter(value)),
        onSubtractCounter: value => dispatch(counterActions.subCounter(value)),
        onStoreResult: value => dispatch(resultsActions.storeResult(value)),
        onDeleteResult: id => dispatch(resultsActions.deleteResult(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {

        state = {
            component: null
        };

        componentDidMount() {
            importComponent()
                .then(cmp => this.setState({component: cmp.default}));
        }

        render() {
            const C = this.state.component;
            let comp = null;
            if (C) {
                comp = <C {...this.props} />;
            }

            return comp;
        }
    }
};

export default asyncComponent;
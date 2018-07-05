import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        };

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error});
                return error;
            });
        }

        componentWillUnmount() {
            if (this.reqInterceptor) {
                axios.interceptors.request.eject(this.reqInterceptor);
            }

            if (this.resInterceptor) {
                axios.interceptors.response.eject(this.resInterceptor);
            }
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        };

        render() {
            const message = this.state.error ? this.state.error.message : null;

            return (
                <Aux>
                    <Modal show={this.state.error !== null} modalClosed={this.errorConfirmedHandler}>
                        {message}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
};

export default withErrorHandler;
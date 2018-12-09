import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.props.setError(null);
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.props.setError(error);
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
            this.props.setError(null);
        };

        render() {
            const message = this.props.error ? this.props.error.message : null;

            return (
                <Aux>
                    <Modal show={this.props.error !== null} modalClosed={this.errorConfirmedHandler}>
                        {message}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
};

export default withErrorHandler;
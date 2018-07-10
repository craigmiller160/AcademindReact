import React, { Component } from 'react';
import Home from '../../components/Home/Home';
import Navbar from '../../components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import Users from '../Users/Users';
import Courses from '../Courses/Courses';

class Pages extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/users" component={Users} />
                    <Route path="/courses" component={Courses} />
                </Switch>
            </div>
        )
    }

}

export default Pages;
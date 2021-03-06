import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import NewPost from '../NewPost/NewPost';
import './Blog.css';
import Posts from '../Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
    return import('../NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: true
    };

    render () {
        let newPostRoute = null;
        if (this.state.auth) {
            newPostRoute = <Route path="/new-post" component={AsyncNewPost} />;
        }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    activeClassName="my-active"
                                    to="/posts"
                                    exact
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}>Posts</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true&a=b'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/posts" component={Posts} />
                    {newPostRoute}
                    <Route render={() => <h1>Not Found</h1>}/>
                    {/*<Redirect from="/" to="/posts" />*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;
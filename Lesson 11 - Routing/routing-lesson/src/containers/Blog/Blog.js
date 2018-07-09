import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import NewPost from '../NewPost/NewPost';
import './Blog.css';
import Posts from '../Posts/Posts';

class Blog extends Component {

    state = {
        selectedPostId: null,
        error: false
    };

    render () {
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
                    <Route path="/new-post" component={NewPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
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
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true&a=b'
                                }}>New Post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;
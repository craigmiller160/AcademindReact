import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    };

    async componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || this.state.loadedPost.id !== this.props.id) {
                console.log('Working');
                try {
                    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`);
                    this.setState({loadedPost: res.data});
                }
                catch (ex) {
                    console.log(ex);
                }
            }
        }
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id && this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;
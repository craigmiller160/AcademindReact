import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    };

    async componentDidUpdate() {
        if (this.props.id) {
            //This is important, because we need to avoid an infinite loop here
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

    deletePostHandler = async () => {
        if (this.state.loadedPost) {
            try {
                const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`);
                console.log(res);
            }
            catch (ex) {
                console.log(ex);
            }
        }
    };

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id && this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;
import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: 0,
        error: false
    };

    async componentDidMount() {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const posts = res.data.slice(0, 4);
            const updatedPosts = posts.map(post => ({
                ...post,
                author: 'Max'
            }));
            this.setState({posts: updatedPosts});
        }
        catch (ex) {
            console.log(ex);
            this.setState({error: true});
        }
    }

    postSelectedHandler = id => {
        this.setState({selectedPostId: id});
    };

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => (
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
            ));
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
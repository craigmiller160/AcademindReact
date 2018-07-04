import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: []
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
        }
    }

    render () {
        const postElems = this.state.posts.map(post => (
            <Post key={post.id} title={post.title} author={post.author} />
        ));

        return (
            <div>
                <section className="Posts">
                    {postElems}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
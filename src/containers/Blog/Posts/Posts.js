import React, { Component } from 'react';
import axios from '../../../axios'; // this import points to axios instnce created in axios.js file

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {    
    state = {
        posts: []
    }

    componentDidMount () {
        // best place for async service call
        axios.get('/posts')
            // once we get promise object then we can access to response object
            .then(response => {
                // get first four posts
                const posts = response.data.slice(0, 4);
                // add extra author field for each post object
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                // set new shorthen list of post to state.posts
                this.setState({posts : updatedPosts});
            })
            .catch(error => {
                console.log(error);
                //this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                    title={post.title} 
                    key={post.id} 
                    author={post.author} 
                    clicked={() => this.postSelectedHandler(post.id)}/>
            });            
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;
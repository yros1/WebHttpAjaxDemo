import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false 
    }

    componentDidMount () {
        // best place for async service call
        axios.get("http://jsonplaceholder.typicode.com/posts")
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
                //console.log(error);
                this.setState({error: true});
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
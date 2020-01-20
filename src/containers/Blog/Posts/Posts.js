import React, { Component } from 'react';
import axios from '../../../axios'; // this import points to axios instnce created in axios.js file
// import { Link } from 'react-router-dom'; - I dont need because I dont use Link anymore
import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {    
    state = {
        posts: []
    }

    componentDidMount () {
        // out the props we have
        console.log(this.props);
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
        // using object notation
        //this.props.history.push({pathname: '/posts/' + id});

        // using a string
        this.props.history.push( '/posts/' + id );
    }

    render () {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if ( !this.state.error ) {
            posts = this.state.posts.map( post => {
                return (
                    // <Link to={'/posts/' + post.id} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler( post.id )} />
                    // </Link>
                );
            } );
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;
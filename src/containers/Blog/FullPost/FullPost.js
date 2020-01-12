import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {
        console.log(this.props);
        if ( this.props.match.params.id ) {
            // this condition makes sure we are adding data for ne post only
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id) ) {                
                axios.get( '/posts/' + this.props.match.params.id )
                    .then( response => {
                        // If we dont do above if, then this resuts with infinate look due to setState Rerender that component.
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    deletePostHandler = () => {
          axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {        
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        // if id null, we still waiting on deta coming back from service call request
        // therefore set post to 'Loading...!' string temporarly.
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
        }

        // Check if loadedPost property has been data give comming from the web service call
        // https://jsonplaceholder.typicode.com/posts/1
        // response
        if (this.state.loadedPost) {
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
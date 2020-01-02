import React, { Component } from 'react';
// import axios from 'axios';
import { Route } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                            <li><a href="/full-post">Full Post</a></li>
                            
                        </ul>
                    </nav>
                </header>
                {/* localhost:3000/ display <Posts /> */}
                <Route path="/" exact render={() => <Posts />} />
                
                {/* localhost:3000/ display <FullPost /> */}
                <Route path="/new-post" render={() => <FullPost />} />
                
                {/* localhost:3000/ display <NewPost /> */}
                <Route path="/full-post" render={() => <NewPost />} />
            </div>
        );
    }
}

export default Blog;
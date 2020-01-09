import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';


class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                            <li><Link to='/full-post'>Full Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* localhost:3000/ display <Posts /> */}
                {/* <Route path="/" exact render={() => <Posts />} /> 
                use render propert to display short messages only*/}
                <Route path="/" exact component={Posts} />
                
                {/* localhost:3000/ display <FullPost /> */}
                <Route path="/new-post" component={NewPost} />

                {/* localhost:3000/ display <NewPost /> */}
                <Route path="/full-post" component={FullPost} />
            </div>
        );
    }
}

export default Blog;
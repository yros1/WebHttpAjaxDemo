import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost'; 
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    // I only import NewPost when this const AsyncComponent is used somewhere.
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                            {/* <li><NavLink to='/full-post'>Full Post</NavLink></li> */}
                        </ul>
                    </nav>
                </header>

                
                <Switch>
                    {/* localhost:3000/ display <FullPost /> */}
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}                    
 
                    {/* localhost:3000/ display <Posts /> */}
                    {/* <Route path="/" exact render={() => <Posts />} /> 
                    use render propert to display short messages only*/}
                    <Route path="/posts" component={Posts} />
                    {/* you can have multiple rouutes with different paths which render same content */}
                    {/* <Route path="/" component={Posts} /> */}
                    {/* this is an alternative for above solution */}
                    {/* this catches any unknown request */}
                    {/* <Redirect from="/" to="/posts" /> */}

                    <Route render={() => <h1>Not found</h1>} />

                    {/* localhost:3000/ display <NewPost /> */}
                    {/* <Route path="/full-post" component={FullPost} /> */}

                    {/* Dynamically render full post based on specific id */}
                    {/* this is a flexable id route */}
                    {/* <Route path="/:id" exact component={FullPost} /> */}
                </Switch>                
            </div>
        );
    }
}

export default Blog;
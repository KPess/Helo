import React from 'react';
import Form from './Components/Form';
import Dashboard from './Components/Dashboard'
import Auth from './Components/Auth'
import Post from './Components/Post'
import {Route, Switch} from 'react-router-dom';

export default (
    <Switch>
        <Route path='/' exact='true' component={Auth} />
        <Route path='/form' component={Form} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/post' component={Post}/>
    </Switch>
)

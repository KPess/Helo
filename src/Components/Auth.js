import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Auth extends React.Component {
    constructor() {
        super();
        this.state = {
            user: [],
            username: ''
        }
    }
    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
          //e accesses info about the event.
          // Target targets the element that triggered the event(the same input field or button).
          // Placeholder accesses the placeholder name from the element.
          // toLowerCase() invoked matches the placeholder to the lowercase variables.
        });
        // console.log(e.target.value)
      };

      handleClick = (e) => {
        e.preventDefault()
        const {username, password} = this.state
        // Prevent default prevents the page from re-rendering 
        // when the submit button is PermissionRequestedEvent, 
        // which was breaking stuff.
        Axios.post('/auth/login/user', {
          username,
          password
        }).then( response => {
              this.props.setUsername(response.data.username);
              this.props.setUser(response.data);
              // this.props.getTransactions(response.transactions.data);
              console.log(response)
        }).catch( error => {
            this.setState({error: error.response});
        })
    }

    render() {
        if (this.session) {
            return <Redirect to="/dashboard"/>
        }
        return (
            <div>
                <h1>Helo</h1>
                <input placeholder="username" name="username" onChange={this.handleChange}/>
                <input placeholder="password" name="password" type="password" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Login</button>
                <button onClick={this.handleClick}>Register</button>
            </div>
        )
    }
}
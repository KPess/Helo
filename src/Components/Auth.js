import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { setUsername, setBalance, setUser, getPosts } from '../redux/reducer';
import {connect} from 'react-redux'

class Auth extends React.Component {
    constructor() {
        super();
        this.state = {
            user: [],
            password: '',
            username: ''
        }
    }

    componentDidMount() {
        if (this.props.username) {
            this.setState({username: this.props.username})
            return <Redirect to="/dashboard"/>
        } else {
            return <Redirect to="/"/>
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

      handleLogin = (e) => {
        e.preventDefault()
        const {username, password} = this.state
        // Prevent default prevents the page from re-rendering 
        // when the submit button is pressed, 
        // which was breaking stuff.
        Axios.post('/auth/login/user', {
          username,
          password
        }).then( response => {
              this.props.setUsername(response.data.username);
              this.props.setUser(response.data.user.username);
              // this.props.getTransactions(response.transactions.data);
              console.log(response.data.user)
        }).catch( error => {
            this.setState({error: error.response});
        })
    }

    handleRegister = (e) => {
        e.preventDefault()
        const {username, password} = this.state
        // Prevent default prevents the page from re-rendering 
        // when the submit button is PermissionRequestedEvent, 
        // which was breaking stuff.
        Axios.post('/auth/register/user', {
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
        if (this.props.username) {
            return <Redirect to="/dashboard"/>
        }
        return (
            <div>
                <h1>Helo</h1>
                <input placeholder="username" name="username" onChange={this.handleChange}/>
                <input placeholder="password" name="password" type="password" onChange={this.handleChange}/>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleRegister}>Register</button>
            </div>
        )
    }
}


const mapStateToProps = reduxState => {
    return reduxState;
  };

export default connect(mapStateToProps, {setUsername, setUser, getPosts})(Auth); 
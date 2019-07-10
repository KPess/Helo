import React from 'react';
import {connect} from "react-redux";
import {getPosts} from "../redux/reducer"


class Dashboard extends React.Component {
    constructor() {
        super() 
        this.state = {

        }
    }
    render() {
        console.log(this.props.username)
        return (
            <div>
                <h1>Dashboard</h1>
                <p>Welcome {this.props.username}</p>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return reduxState;
  };

  export default connect(
    mapStateToProps,
    { getPosts }
  )(Dashboard);
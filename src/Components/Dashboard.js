import React from 'react';


export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <p>Welcome {sessionStorage.user}</p>
            </div>
        )
    }
}
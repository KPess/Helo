import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './Components/Auth'
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Nav from './Components/Nav';
import Post from './Components/Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <Auth />
         <Dashboard/>
         <Form/>
         <Nav/>
         <Post />
        </p>
      </header>
    </div>
  );
}

export default App;

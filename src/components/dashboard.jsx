import React, { Component } from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Welcome</h1>
        <ul>
          <li>
            <Link to="/workspace/color">color</Link>
          </li>
          <li>
            <Link to="/workspace/sizeCat">Size category</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Dashboard;

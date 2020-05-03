import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/workspace">Workspace</Link>
      </li>
    </ul>
  );
}

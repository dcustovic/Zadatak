import React from 'react';
import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <nav className="navbar navbar-light bg-dark mb-5">
      <Link to="/" className="text-white"><b>MOVIES API</b></Link>
      <Link to="/new" className="btn btn-primary btn-sm my-2 my-sm-0" type="submit">Create</Link>
    </nav>
  );
 }

export default TopNav;

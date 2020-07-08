import React, { Component } from 'react';


function TopNav() {
  return (
    <nav className="navbar navbar-light bg-dark mb-5">
        <div className="text-white">MOVIES API</div>
        <form className="form-inline">
            <button className="btn btn-success my-2 my-sm-0" type="submit">Create</button>
            <button className="btn btn-danger my-2 my-sm-0" type="submit">Delete</button>
        </form>
    </nav>
  );
 }

export default TopNav;

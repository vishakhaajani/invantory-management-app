import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light p-3 bg-dark">
        <div className="container-fluid ">
          <a className="navbar-brand text-light" href="#">Inventory management</a>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active text-light" aria-current="page">Add</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Header;
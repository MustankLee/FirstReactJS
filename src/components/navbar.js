import React from "react";
import Badge from 'react-bootstrap/Badge';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-100 bg-dark nav-height">
      <div className="d-flex list-unstyled justify-content-end align-items-center fw-semibold text-light">
        <Link to="/" className="me-4 text-decoration-none text-reset"><li className="list">Home</li></Link>
        <Link to="/about" className="me-4 text-decoration-none text-reset"><li className="list">About</li></Link>
        <Link to="/myproject" className="me-4 text-decoration-none text-reset">
            <button className="btn btn-success fw-semibold">
                Project
                <Badge bg="danger ms-2">9</Badge>
            </button>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;

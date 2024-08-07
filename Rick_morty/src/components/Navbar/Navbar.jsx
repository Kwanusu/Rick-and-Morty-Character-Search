

import { NavLink, Link } from "react-router-dom";
import "../../App.css";



const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          Rick & Morty <span className="text-primary">WiKi</span>
        </Link>
          <style jsx>{`
            button[aria-expanded="false"] > .close {
              display: none;
            }
            button[aria-expanded="true"] > .open {
                display: none;
            }
          `}</style>
        </div>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >

        <style jsx>
         {`
          button[aria-expanded="false"] > .close{
          display: none;
          }
          button[aria-expanded="true"] > .open{
          display: none;
          }
                
                
          `}
        </style>
          <i className="fa-solid fa-bars open text-dark"></i>
          <i className="fa-solid fa-times close text-dark"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        > 
        <div className="navbar-nav fs-5">
          <NavLink  to="/" className="nav-link">
            Characters
          </NavLink>

          <NavLink to="/Episodes" className="nav-link">
            Episodes
          </NavLink>

          <NavLink
            className="nav-link"
            to="/Locations" >
            Location
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
import React, { useDebugValue } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      
      <ul className="navBarUl">
        <li className="navLi">
        {user ? (
           <Link to= "/home" style={{ textDecoration: "none", color: "white" }}><h1 className="brand1"><i className="fa-solid fa-video" style={{fontSize:"3rem"}}></i> {user.username.toUpperCase()}</h1></Link>
          ) : (
            
          <Link to="/" style={{ textDecoration: "none", color: "white" }} ><h1 className="brand1"><i className="fa-solid fa-video" style={{fontSize:"3rem"}}></i> Video Library </h1></Link>
          )}
        </li>
        <li className="navLi">
        <SearchBar/>
          </li>
        <li className="navLi">
          {user ? (
            <button className="Login" onClick={logoutUser}>Logout</button>
          ) : (
            
            <button className="Login" onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

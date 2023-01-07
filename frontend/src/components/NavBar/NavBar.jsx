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
      <SearchBar/>
      <ul>
        <li className="brand">
        {user ? (
           <Link to= "/home" style={{ textDecoration: "none", color: "white" }}>{user.username}/RickTube!</Link>
          ) : (
            
          <Link to="/" style={{ textDecoration: "none", color: "white" }} >RickTube!</Link>
          )}
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

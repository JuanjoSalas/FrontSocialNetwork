import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Header.scss";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.key === "Enter") {
      navigate("/search/" + search);
    }
  };
  
  return (
<<<<<<< HEAD
    <div>
      
      {user ? (
        <>
        <span>
        <Link to="/">Home /</Link>
      </span>
      <input type="text" name="search" onKeyUp={handleSearch} />
        <span>
          <Link to="/profile">Profile /</Link>
        </span>
          <span
            onClick={() => {
              dispatch(logout());
            }}
          >
            <Link to="/login"> Logout</Link>
          </span>
        </>
      ) : (
        <>
          <span>
            <Link to="/login"> Login /</Link>
          </span>
          <span>
            <Link to="/register"> Register /</Link>
          </span>
        </>
      )}
=======
    <div className="header">
      <div className="header-left">
        <Link to="/" className="header-icon">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        {user && (
          <input 
            type="text" 
            name="search" 
            placeholder="Search" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={handleSearch} 
            className="header-search"
          />
        )}
      </div>
      <div className="header-right">
        {user ? (
          <>
            <Link to="/profile" className="header-icon">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <span
              className="header-icon logout-icon"
              onClick={() => {
                dispatch(logout());
              }}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </span>
          </>
        ) : (
          <>
            <Link to="/login" className="header-link">Login</Link>
            <Link to="/register" className="header-link">Register</Link>
          </>
        )}
      </div>
>>>>>>> agustin
    </div>
  );
};

export default Header;

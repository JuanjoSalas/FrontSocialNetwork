import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice"

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.key == "Enter") {
      navigate("/search/"+search)
    }
  };
  
  return (
    <div>
      <span>
        <Link to="/">Home /</Link>
      </span>
      <input type="text" name="search" onKeyUp={handleSearch} />
      {user ? (
        <>
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
    </div>
  );
};

export default Header;
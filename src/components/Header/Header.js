import React, {useContext} from 'react';
import FormLogin from "./FormLogin/FormLogin";
import Profile from "./Profile/Profile";
import {AuthContext} from "../../store/authContext";

const Header = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Neto Social</a>
        {!ctx.isLoggedIn && <FormLogin/>}
        {ctx.isLoggedIn && <Profile/>}
      </div>
    </nav>
  );
};

export default Header;

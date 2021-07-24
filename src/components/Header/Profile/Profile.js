import React, {useContext} from 'react';
import {AuthContext} from "../../../store/authContext";

const Profile = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <div className="d-flex align-items-center">
      <div>
        <p style={{margin: '0 20px 0 0'}}>Hello, {ctx.user.name}</p>
      </div>
      <div style={{borderRadius: '50%', overflow: 'hidden', marginRight: '10px'}}>
        <img src={ctx.user.avatar} alt="Avatar" style={{maxWidth: '100%'}}/>
      </div>
      <button className="btn btn-warning" type="submit" onClick={ctx.logout}>Logout</button>
    </div>
  );
};

export default Profile;

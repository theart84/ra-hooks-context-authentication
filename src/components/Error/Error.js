import React, {useContext} from 'react';
import {AuthContext} from "../../store/authContext";

const Error = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className="card text-white bg-danger mb-3" style={{maxWidth: '50rem', marginRight: 'auto', marginLeft: 'auto'}}>
      <div className="card-body">
        <h1 className="card-title">Внимание!</h1>
        <p className="card-text">{ctx.error.message ? ctx.error.message : 'Жизнь тлен, как и этот сервак;('}</p>
      </div>
    </div>
  );
};

export default Error;

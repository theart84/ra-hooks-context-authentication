import React, {useContext, useState} from 'react';
import {AuthContext} from "../../../store/authContext";

const FormLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const ctx = useContext(AuthContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const payload = {
      login: username,
      password
    }
    ctx.login(payload)
  }

  const onChangeHandler = (event) => {
    const {name, value} = event.target;
    name === 'userName' ? setUsername(value) : setPassword(value);
  }

  return (
    <form className="d-flex" onSubmit={onSubmitHandler}>
      <input className="form-control d-inline-block"
             type="text"
             name="userName"
             placeholder="Username"
             value={username}
             onChange={onChangeHandler}
             style={{marginRight: '10px'}}
      />
      <input className="form-control d-inline-block"
             type="password"
             name="password"
             value={password}
             onChange={onChangeHandler}
             placeholder="Password"
             style={{marginRight: '10px'}}
      />
      <button className="btn btn-primary" type="submit">Login</button>
    </form>
  );
};

export default FormLogin;

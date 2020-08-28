import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {authMethods} from '../firebase/authMethods';

const AuthProvider = props => {
  const [inputs, setInputs] = useState({email: '', password: ''});
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({loggedIn: false});

  useEffect(() => {
    handleCurrentUser();
  }, []);

  const handleCurrentUser = () => {
    console.log('handleCurrentUser');
    authMethods.currentUser(setUser);
  };

  const handleSignup = () => {
    console.log('handleSignup');
    authMethods.signup(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };

  const handleSignin = () => {
    console.log('handleSignin!!!!');
    authMethods.signin(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };

  const handleSignout = () => {
    authMethods.signout(setErrors, setToken);
  };

  return (
    <firebaseAuth.Provider
      value={{
        handleSignup,
        handleSignin,
        token,
        inputs,
        setInputs,
        errors,
        handleSignout,
        handleCurrentUser,
        user,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export const firebaseAuth = React.createContext();

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};

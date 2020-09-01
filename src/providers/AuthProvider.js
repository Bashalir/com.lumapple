import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {authMethods} from '../firebase/authMethods';
import {useToasts} from 'react-toast-notifications';
import axios from 'axios';

const AuthProvider = props => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({loggedIn: false, uid: ''});

  useEffect(() => {
    handleCurrentUser();
  }, []);

  const handleCurrentUser = () => {
    console.log('handleCurrentUser');
    authMethods.currentUser(setUser);
  };

  const handleSignup = data => {
    console.log('handleSignup');
    authMethods.signup(inputs, setErrors, setToken, setUser);

    console.log(errors, token);
  };

  const handleSignin = async () => {
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
        setToken,
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

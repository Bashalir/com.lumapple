import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {authMethods} from '../firebase/authMethods';

const AuthProvider = props => {
  const [inputs, setInputs] = useState({email: '', password: ''});
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  const handleSignup = () => {
    console.log('handleSignup');
    authMethods.signup(inputs.email, inputs.password, setErrors);
    console.log(errors);
  };

  return (
    <firebaseAuth.Provider
      value={{
        handleSignup,
        inputs,
        setInputs,
        errors,
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

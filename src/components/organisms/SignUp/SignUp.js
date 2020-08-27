import React, {useContext} from 'react';
import {firebaseAuth} from '../../../providers/AuthProvider';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import * as yup from 'yup';

import Card from '../../atoms/card/Card';
import StyledSignUp from './styles/StyledSignUp';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const SignUp = () => {
  const {handleSignup, inputs, setInputs, errors, setToken} = useContext(
    firebaseAuth,
  );

  const handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit');
    handleSignup();
    // const errorsUnique = new Set(errors);
  };
  const handleChange = e => {
    const {name, value} = e.target;
    console.log(inputs);
    setInputs(prev => ({...prev, [name]: value}));
  };

  return (
    <StyledSignUp>
      <Card isHover={false}>
        <h3>Bonjour !</h3>
        <span>Connectez-vous pour découvrir toutes nos fonctionnalités</span>
        <form onSubmit={handleSubmit}>
          {/* replace the div tags with a form tag */}
          Signup
          {/* make inputs  */}
          <input
            onChange={handleChange}
            name="email"
            placeholder="email"
            value={inputs.email}
          />
          <input
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="password"
            value={inputs.password}
          />
          <button>signup</button>
          {errors.length > 0
            ? errors.map((error, i) => (
                <p key={i} style={{color: 'red'}}>
                  {error}
                </p>
              ))
            : null}
        </form>
      </Card>
    </StyledSignUp>
  );
};

export default SignUp;

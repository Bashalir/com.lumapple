import React, {useContext} from 'react';
import {firebaseAuth} from '../../../providers/AuthProvider';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import * as yup from 'yup';

import Card from '../../atoms/card/Card';
import StyledSignIn from './styles/StyledSignIn';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const SignIn = () => {
  const {handleSignin, inputs, setInputs, errors} = useContext(firebaseAuth);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit');
    handleSignin();
  };
  const handleChange = e => {
    const {name, value} = e.target;
    console.log(inputs);
    setInputs(prev => ({...prev, [name]: value}));
  };
  return (
    <StyledSignIn>
      <Card isHover={false}>
        <h3>Bonjour !</h3>
        <span>Connectez-vous pour découvrir toutes nos fonctionnalités</span>
        <form onSubmit={handleSubmit}>
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
            placeholder="mot de passe"
          />
          <button>signin</button>
          {errors.length > 0
            ? errors.map((error, i) => (
                <p key={i} style={{color: 'red'}}>
                  {error}
                </p>
              ))
            : null}
        </form>
      </Card>
    </StyledSignIn>
  );
};

export default SignIn;

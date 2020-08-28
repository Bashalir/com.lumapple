import React, {useContext} from 'react';
import {firebaseAuth} from '../../../providers/AuthProvider';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import * as yup from 'yup';

import Card from '../../atoms/card/Card';
import StyledSignIn from './styles/StyledSignIn';
import Input from '../../atoms/input/Input';

const schema = yup.object().shape({
  email: yup.string().min(8, 'Pas assez long').required(),
  password: yup.string().min(8, 'Pas assez long').required(),
});

const SignIn = () => {
  const {handleSignin, inputs, setInputs} = useContext(firebaseAuth);
  const {control, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    console.log('handleSubmit');
    handleSignin();
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('handleSubmit');
  //   handleSignin();
  // };
  // const handleChange = e => {
  //   const {name, value} = e.target;
  //   console.log(inputs);
  //   setInputs(prev => ({...prev, [name]: value}));
  // };

  return (
    <StyledSignIn>
      <Card isHover={false}>
        <h3>Bonjour !</h3>
        <span>Connectez-vous pour découvrir toutes nos fonctionnalités</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            as={Input}
            name="email"
            control={control}
            defaultValue=""
            type="text"
            placeholder="E-mail"
          />
          <p>{errors.email?.message}</p>
          <Controller
            as={Input}
            name="password"
            control={control}
            defaultValue=""
            type="password"
            placeholder="Mot de Passe"
          />
          <p>{errors.password?.message}</p>

          <input type="submit" />
        </form>

        {/* <form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            name="email"
            placeholder="E-mail"
            value={inputs.email}
          />
          <Input
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="Mot de Passe"
          />
          <button>signin</button>
          {errors.length > 0
            ? errors.map((error, i) => (
                <p key={i} style={{color: 'red'}}>
                  {error}
                </p>
              ))
            : null}
        </form> */}
      </Card>
    </StyledSignIn>
  );
};

export default SignIn;

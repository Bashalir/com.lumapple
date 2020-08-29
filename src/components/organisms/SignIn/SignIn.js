import React, {useState, useContext} from 'react';
import {firebaseAuth} from '../../../providers/AuthProvider';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import * as yup from 'yup';
import isEmpty from 'lodash.isempty';

import Card from '../../atoms/card/Card';
import StyledSignIn from './styles/StyledSignIn';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';
import {defaultTheme} from '../../../themes';
import {useToasts} from 'react-toast-notifications';
import {Link} from 'react-router-dom';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Veuillez saisir une adresse email.')
    .required('Veuillez saisir une adresse email.'),
  password: yup
    .string()
    .min(6, 'Votre mot de passe contient 8 charactères minimum')
    .required(),
});

const SignIn = () => {
  const {handleSignin, inputs, setInputs} = useContext(firebaseAuth);
  const {handleSubmit, register, errors} = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    handleSignin();
    console.log(inputs.email, inputs.password);
  };

  const handleChange = e => {
    const {name, value} = e.target;
    setInputs(prev => ({...prev, [name]: value}));
  };

  return (
    <StyledSignIn>
      <Card isHover={false}>
        <h3>Bonjour !</h3>
        <span>Connectez-vous pour découvrir toutes nos fonctionnalités</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="E-mail"
            inputRef={register}
            error={errors.email ? true : false}
          />
          <p>{errors.email?.message}</p>

          <Input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Mot de Passe"
            inputRef={register}
            error={errors.password ? true : false}
          />

          <p>{errors.password?.message}</p>

          <Button
            type="submit"
            name="Se connecter"
            textColor={defaultTheme.statusValidColor}
            borderColor={defaultTheme.statusValidColor}
            disabled={isEmpty(errors) ? false : true}
          />
        </form>
        <p>
          <b>Envie de nous rejoindre ?</b>{' '}
          <Link to="/s-enregistrer">Créer un compte</Link>
        </p>
      </Card>
    </StyledSignIn>
  );
};

export default SignIn;

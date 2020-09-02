import React, {useContext} from 'react';
import {firebaseAuth} from '../../../providers/AuthProvider';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import isEmpty from 'lodash.isempty';

import Card from '../../atoms/card/Card';
import StyledSignUp from './styles/StyledSignUp';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';
import {defaultTheme} from '../../../themes/';
import {Link} from 'react-router-dom';
import SignUpSchema from '../../../validations/SignUpSchema';

const SignUp = () => {
  const {handleSignup, inputs, setInputs} = useContext(firebaseAuth);
  const {handleSubmit, register, errors} = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = async () => {
    console.log('handleSubmit');
    //wait to signup
    await handleSignup();
    //push home
    // props.history.push('/');
  };

  const handleChange = e => {
    const {name, value} = e.target;
    console.log(inputs);
    setInputs(prev => ({...prev, [name]: value}));
  };

  return (
    <StyledSignUp>
      <Card isHover={false}>
        <h3>Bienvenue !</h3>
        <span>Inscrivez-vous pour découvrir toutes nos fonctionnalités</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Nom d'utilisateur"
            inputRef={register}
            error={errors.name ? true : false}
          />
          <p>{errors.name?.message}</p>
          <Input
            type="text"
            name="firstname"
            onChange={handleChange}
            placeholder="Prénom"
            inputRef={register}
            error={errors.firstname ? true : false}
          />
          <p>{errors.firstname?.message}</p>
          <Input
            type="text"
            name="lastname"
            onChange={handleChange}
            placeholder="Nom"
            inputRef={register}
            error={errors.lastname ? true : false}
          />
          <p>{errors.lastname?.message}</p>

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
            name="Créer mon compte"
            textColor={defaultTheme.statusValidColor}
            borderColor={defaultTheme.statusValidColor}
            disabled={isEmpty(errors) ? false : true}
          />
        </form>
        <p>
          <b>Vous avez déjà un compte ?</b>{' '}
          <Link to="/se-connecter">Me connecter</Link>
        </p>
      </Card>
    </StyledSignUp>
  );
};

export default SignUp;

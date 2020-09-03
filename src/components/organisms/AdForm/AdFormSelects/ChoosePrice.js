import React, {useState, useContext} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';

import Card from '../../../atoms/card/Card';
import Input from '../../../atoms/input/Input';
import choosePriceSchema from '../../../../validations/choosePriceSchema';
import Button from '../../../atoms/button/Button';
import {defaultTheme} from '../../../../themes';
import {isEmpty} from 'lodash.isempty';
import {firebaseAuth} from '../../../../providers/AuthProvider';

const ChoosePrice = ({ad, setAd}) => {
  const {user, token} = useContext(firebaseAuth);

  const [price, setPrice] = useState();
  const {handleSubmit, register, errors} = useForm({
    resolver: yupResolver(choosePriceSchema),
  });

  const handleChange = e => {
    setPrice(e.target.value);
  };

  const handleCreateAd = () => {
    console.log('handleSignup');
    axios
      .post(
        `http://localhost:3030/api/ads`,
        {
          userId: user.userApiId,
          familyId: ad.family,
          screenStateId: ad.screenState,
          hullStateId: ad.hullState,
          price,
          colorId: ad.color ? ad.color : null,
          storageId: ad.storage ? ad.storage : null,
        },
        {
          headers: {
            authorization: token,
          },
        },
      )
      .catch(error => {
        console.log('Erreur : ', error);
      });
  };

  const onSubmit = async () => {
    console.log('handleCreateAd');
    //wait to signup
    await handleCreateAd();
    //push home
    // props.history.push('/');
  };

  return (
    <div>
      <Card isHover={false}>
        <h4>Quel est votre prix ?</h4>
        <span>
          {ad.familyRef} {ad.color && ad.color}{' '}
          {ad.capacity && `${ad.capacity} Go`}
        </span>
        <span>État de l&#39;écran : {ad.screenStateTitle}</span>
        <span>État général : {ad.hullStateTitle}</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="number"
            name="price"
            onChange={handleChange}
            placeholder="Prix"
            inputRef={register}
            error={errors.price ? true : false}
          />
          <p>{errors.price?.message}</p>
          <Button
            type="submit"
            name="Postez mon annonce"
            textColor={defaultTheme.statusValidColor}
            borderColor={defaultTheme.statusValidColor}
            disabled={errors.price && true}
          />
        </form>
      </Card>
    </div>
  );
};

ChoosePrice.displayName = 'ChoosePrice';
ChoosePrice.propTypes = {
  ad: PropTypes.object,
  setAd: PropTypes.func,
};

export default ChoosePrice;

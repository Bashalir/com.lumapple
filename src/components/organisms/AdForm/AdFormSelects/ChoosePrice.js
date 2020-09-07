import React, {useState, useContext} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import {useHistory} from 'react-router-dom';
import {useToasts} from 'react-toast-notifications';

import Card from '../../../atoms/card/Card';
import Input from '../../../atoms/input/Input';
import choosePriceSchema from '../../../../validations/choosePriceSchema';
import Button from '../../../atoms/button/Button';
import {defaultTheme} from '../../../../themes';
import {isEmpty} from 'lodash.isempty';
import {firebaseAuth} from '../../../../providers/AuthProvider';

const ChoosePrice = ({ad, setAd}) => {
  const {addToast} = useToasts();
  const history = useHistory();
  const {handleSubmit, register, errors} = useForm({
    resolver: yupResolver(choosePriceSchema),
  });

  const {user, token} = useContext(firebaseAuth);
  const {errorFetch, setErrorFetch} = useState();
  const [price, setPrice] = useState();

  const handleChange = e => {
    setPrice(e.target.value);
  };

  const handleCreateAd = () => {
    console.log('handleSignup');
    axios
      .post(
        `http://localhost:3030/api/ads`,
        {
          data: {
            familyId: ad.family,
            screenStateId: ad.screenState,
            hullStateId: ad.hullState,
            price,
            colorId: ad.color ? ad.color : null,
            storageId: ad.storage ? ad.storage : null,
          },
        },
        {
          headers: {
            authorization: token,
          },
        },
      )
      .then(() => {
        // handle success

        addToast('Votre annonce a bien été posté.', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push('/');
      })
      .catch(error => {
        addToast('Erreur', {
          appearance: 'error',
          autoDismiss: true,
        });
        console.log('Erreur : ', error);
      });
  };

  const onSubmit = async () => {
    //wait to signup
    await handleCreateAd();

    // await history.push('/');
  };

  return (
    <div>
      <Card isHover={false} className="container-card">
        <h4>Quel est votre prix ?</h4>
        <div className="feature">
          <span>{ad.familyType} </span>
          <span>{ad.color && ad.colorRef}</span>
          <span> {ad.capacity && `${ad.capacity} Go`}</span>

          <span>État de l&#39;écran : {ad.screenStateTitle}</span>
          <span>État général : {ad.hullStateTitle}</span>
        </div>
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

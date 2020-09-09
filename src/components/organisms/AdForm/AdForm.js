/* eslint-disable react/prop-types */
import React, {useContext, useState} from 'react';

import StyledAdForm from './styles/StyledAdForm';
import HelloAdForm from '../HelloAdForm/HelloAdForm';
import {firebaseAuth} from '../../../providers/AuthProvider';
import Card from '../../atoms/card/Card';
import CategoryCard from '../../molecules/CategoryCard/CategoryCard';
import {useForm} from 'react-hook-form';
import SelectCategory from './AdFormSelects/SelectCategory';
import SelectFamily from './AdFormSelects/SelectFamily';
import SelectColor from './AdFormSelects/SelectColor';
import SelectStorage from './AdFormSelects/SelectStorage';
import SelectScreenStates from './AdFormSelects/SelectScreenStates';
import SelectHullStates from './AdFormSelects/SelectHullStates';
import ChoosePrice from './AdFormSelects/ChoosePrice';
import {render} from 'react-dom';

const AdForm = () => {
  const {user} = useContext(firebaseAuth);
  const [ad, setAd] = useState({});

  const switchColor = {
    1: <SelectScreenStates ad={ad} setAd={setAd} />,
    2: <SelectColor ad={ad} setAd={setAd} />,
    3: <SelectColor ad={ad} setAd={setAd} />,
    4: <SelectColor ad={ad} setAd={setAd} />,
    5: <SelectColor ad={ad} setAd={setAd} />,
  };

  const switchStorage = {
    2: <SelectScreenStates ad={ad} setAd={setAd} />,
    3: <SelectStorage ad={ad} setAd={setAd} />,
    4: <SelectStorage ad={ad} setAd={setAd} />,
    5: <SelectScreenStates ad={ad} setAd={setAd} />,
  };

  const switchScreenStates = {
    3: <SelectScreenStates ad={ad} setAd={setAd} />,
    4: <SelectScreenStates ad={ad} setAd={setAd} />,
  };

  return (
    <StyledAdForm>
      {!user.loggedIn ? (
        <HelloAdForm />
      ) : (
        <SelectCategory ad={ad} setAd={setAd} />
      )}
      {ad.category && <SelectFamily ad={ad} setAd={setAd} />}
      {ad.family && switchColor[ad.category]}
      {ad.color && switchStorage[ad.category]}
      {ad.storage && switchScreenStates[ad.category]}
      {ad.screenState && <SelectHullStates ad={ad} setAd={setAd} />}
      {ad.hullState && <ChoosePrice ad={ad} setAd={setAd} />}
    </StyledAdForm>
  );
};

export default AdForm;

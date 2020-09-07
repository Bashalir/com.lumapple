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

const AdForm = () => {
  const {user} = useContext(firebaseAuth);
  const [ad, setAd] = useState({});

  return (
    <StyledAdForm>
      {!user.loggedIn && <HelloAdForm />}

      <SelectCategory ad={ad} setAd={setAd} />

      {ad.category && <SelectFamily ad={ad} setAd={setAd} />}

      {ad.family && <SelectColor ad={ad} setAd={setAd} />}
      {ad.color && <SelectStorage ad={ad} setAd={setAd} />}
      {ad.storage && <SelectScreenStates ad={ad} setAd={setAd} />}
      {ad.screenState && <SelectHullStates ad={ad} setAd={setAd} />}
      {ad.hullState && <ChoosePrice ad={ad} setAd={setAd} />}
    </StyledAdForm>
  );
};

export default AdForm;

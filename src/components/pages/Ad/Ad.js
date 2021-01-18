import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';

import {firebaseAuth} from '../../../providers/AuthProvider';
import Card from '../../atoms/card/Card';
import AdSheet from '../../organisms/AdSheet/AdSheet';

const Ad = () => {
  const [ad, setAd] = useState();
  const {user, token} = useContext(firebaseAuth);
  const {id} = useParams();

  useEffect(() => {
    getAd();
  }, []);

  const url = `${process.env.REACT_APP_API_PATH}/api/ads/${id}`;
  const getAd = () => {
    axios
      .get(url, {})
      .then(response => {
        setAd(response.data);
      })
      .catch(error => {
        console.log('Erreur : ', error);
      });
  };
  return <AdSheet ad={ad} />;
};

export default Ad;

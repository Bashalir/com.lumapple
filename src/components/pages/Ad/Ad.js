import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';

import {firebaseAuth} from '../../../providers/AuthProvider';
import Card from '../../atoms/card/Card';

const Ad = () => {
  const [ad, setAd] = useState();
  const {user, token} = useContext(firebaseAuth);
  const {id} = useParams();

  useEffect(() => {
    getAd();
  }, []);

  const url = `http://localhost:3030/api/ads/${id}`;
  const getAd = () => {
    axios
      .get(url, {
        crossDomain: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': '*',
        },
      })
      .then(response => {
        setAd(response.data);
      })
      .catch(error => {
        console.log('Erreur : ', error);
      });
  };
  return <Card isHover={false}>ID :{ad && ad.id}</Card>;
};

export default Ad;

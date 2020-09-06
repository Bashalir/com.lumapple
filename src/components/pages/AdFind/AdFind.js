import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

import ProductCard from '../../molecules/ProductCard/ProductCard';
import StyledAdFind from './styles/StyledAdFind';
import AdList from '../../organisms/AdList/AdList';

const AdFind = () => {
  const [ads, setAds] = useState([]);
  const [numberOfAd, setNumberOfAd] = useState([]);
  const {search} = useParams();

  useEffect(() => {
    getAds();
  }, [search]);

  const textFind = search.replace('texte=', '');
  const urlAds = `http://localhost:3030/api/ads/find?text=${textFind}`;

  const getAds = () => {
    axios
      .get(urlAds)
      .then(response => {
        setNumberOfAd(response.data.count);
        setAds(response.data.rows);
      })
      .catch(error => {
        console.log('Erreur : ', error);
      });
  };
  return (
    <StyledAdFind>
      <AdList ads={ads} />
    </StyledAdFind>
  );
};

export default AdFind;

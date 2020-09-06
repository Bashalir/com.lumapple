import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import ProductCard from '../../molecules/ProductCard/ProductCard';
import MacbookPro from '../../molecules/ProductCard/img/macbook_pro.jpeg';
import StyledAdList from './styles/StyledAdList';

const AdList = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    getAds();
  }, []);

  const getAds = () => {
    axios
      .get('http://localhost:3030/api/ads')
      .then(response => {
        setAds(response.data);
      })
      .catch(error => {
        console.log('Erreur : ', error);
      });
  };

  const listAds = ads.map(ad => (
    <Link to={`/annonce/${ad.id}`} key={ad.id}>
      <ProductCard
        key={ad.id}
        imgRef={ad.Family.ref}
        name={ad.Family.type}
        title={ad.Family.type}
        short_description={ad.Family.type}
        description={ad.Family.type}
        price={`${ad.price} €`}
      />
    </Link>
  ));

  return <StyledAdList>{listAds}</StyledAdList>;
};

export default AdList;

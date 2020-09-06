import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';

import ProductCard from '../../molecules/ProductCard/ProductCard';
import StyledAdList from './styles/StyledAdList';

const AdList = ({ads}) => {
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

AdList.displayName = 'AdList';
AdList.propTypes = {
  ads: PropTypes.object.isRequired,
};

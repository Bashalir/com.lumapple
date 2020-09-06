import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import ProductCard from '../../molecules/ProductCard/ProductCard';
import StyledAdPage from './styles/StyledAdPage';
import AdList from '../../organisms/AdList/AdList';

const AdPage = () => {
  const [ads, setAds] = useState([]);
  const [numberOfAd, setNumberOfAd] = useState([]);
  const {page} = useParams();

  const limitPerPage = 2;
  const numberOfPages = Math.ceil(numberOfAd / limitPerPage);

  useEffect(() => {
    getAds();
  }, [page]);

  const urlAds = !page
    ? 'http://localhost:3030/api/ads'
    : `http://localhost:3030/api/ads?page=${page - 1}`;

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

  const pageNumbers = [];
  let renderPageNumbers;
  if (numberOfAd !== null) {
    for (let i = 1; i <= numberOfPages; i++) {
      pageNumbers.push(i);
    }

    renderPageNumbers = pageNumbers.map(number => {
      return (
        <Link key={number} to={`/annonces/${number}`}>
          <span key={number}>{number}</span>
        </Link>
      );
    });
  }

  const prevPage = page - 1 <= 0 ? false : true;
  const nextPage = page == numberOfPages ? false : true;

  return (
    <StyledAdPage>
      <AdList ads={ads} />
      {prevPage && <Link to={`/annonces/${page - 1}`}>&laquo;</Link>}
      {renderPageNumbers}
      {nextPage && <Link to={`/annonces/${parseInt(page) + 1}`}>&raquo;</Link>}
    </StyledAdPage>
  );
};

export default AdPage;

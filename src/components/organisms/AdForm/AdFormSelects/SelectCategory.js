import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';

import Card from '../../../atoms/card/Card';
import CategoryCard from '../../../molecules/CategoryCard/CategoryCard';
import {PropTypes} from 'prop-types';
import {firebaseAuth} from '../../../../providers/AuthProvider';
import {BrowserRouter} from 'react-router-dom';

const SelectCategory = ({ad, setAd}) => {
  const {user, token} = useContext(firebaseAuth);

  const [category, setCategory] = useState();
  const [categories, setCategories] = useState([]);

  const handleChange = e => {
    setCategory({category: e.target.value});
    setAd({
      category: e.target.value,
      ref: e.target.id,
      type: e.target.title,
    });
  };

  useEffect(() => {
    getCategories();
  }, [ad.category]);

  const getCategories = () => {
    axios
      .get(
        'http://localhost:3030/api/categories',
        {},
        {
          headers: {
            authorization: token,
          },
        },
      )
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log('Erreur : ', error);
      });
  };

  const listCategories = categories.map(category => (
    <div className="card-button" key={category.ref}>
      <input
        type="radio"
        id={category.ref}
        name="category"
        title={category.type}
        value={category.id}
        onChange={handleChange}
      />
      <label htmlFor={category.ref}>
        <CategoryCard name={category.type} imgRef={category.ref} />
      </label>
    </div>
  ));

  return (
    <div>
      <Card isHover={false} className="container-card">
        <h4>Que souhaitez-vous vendre ?</h4>
        <div className="ad-list category-list">
          {categories[1] ? listCategories : <div>loading</div>}
        </div>
      </Card>
    </div>
  );
};

SelectCategory.displayName = 'SelectCategory';
SelectCategory.propTypes = {
  ad: PropTypes.object,
  setAd: PropTypes.func,
};

export default SelectCategory;

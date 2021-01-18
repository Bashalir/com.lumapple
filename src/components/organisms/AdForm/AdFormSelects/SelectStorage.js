import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Card from '../../../atoms/card/Card';
import CategoryCard from '../../../molecules/CategoryCard/CategoryCard';

import {firebaseAuth} from '../../../../providers/AuthProvider';

const SelectStorage = ({ad, setAd}) => {
  const {user, token} = useContext(firebaseAuth);

  const [storage, setStorage] = useState();
  const [storages, setStorages] = useState([]);

  const handleChange = e => {
    setStorage({storage: e.target.value});
    setAd({
      ...ad,
      storage: e.target.value,
      capacity: e.target.id,
    });
  };

  useEffect(() => {
    getStorages();
  }, [ad.family, ad.storage]);

  const getStorages = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_PATH}/api/storages?ref=${ad.familyRef}`,
        {},
        {
          headers: {
            authorization: token,
          },
        },
      )
      .then(response => {
        setStorages(response.data);
      })
      .catch(error => {
        console.log('Erreur : ', error);
      });
  };

  const listStorages = storages.map(storage => (
    <div className="card-button" key={storage.capacity}>
      <input
        type="radio"
        id={storage.capacity}
        name="storage"
        value={storage.id}
        onChange={handleChange}
      />
      <label htmlFor={storage.capacity}>
        <CategoryCard imgRef={'storage'} name={`${storage.capacity} Go`} />
      </label>
    </div>
  ));

  return (
    <div>
      <Card isHover={false} className="container-card">
        <h4>Quel est le stockage de votre {ad.familyType} ?</h4>
        <div className="ad-list category-list">
          {storages && storages[1] ? listStorages : <div>loading</div>}
        </div>
      </Card>
    </div>
  );
};

SelectStorage.displayName = 'SelectStorage';
SelectStorage.propTypes = {
  ad: PropTypes.object,
  setAd: PropTypes.func,
};

export default SelectStorage;

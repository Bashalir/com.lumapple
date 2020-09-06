import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Card from '../../../atoms/card/Card';
import CategoryCard from '../../../molecules/CategoryCard/CategoryCard';

import {firebaseAuth} from '../../../../providers/AuthProvider';
import ModelCard from '../../../molecules/ModelCard/ModelCard';

const SelectFamily = ({ad, setAd}) => {
  const {user, token} = useContext(firebaseAuth);

  const [family, setFamily] = useState();
  const [families, setFamilies] = useState([]);

  const handleChange = e => {
    setFamily({family: e.target.value});
    setAd({
      ...ad,
      family: e.target.value,
      familyRef: e.target.id,
      familyType: e.target.title,
    });
  };

  useEffect(() => {
    getFamilies();
  }, [ad.category, ad.family]);

  const getFamilies = () => {
    axios
      .get(
        `http://localhost:3030/api/families?ref=${ad.ref}`,
        {},
        {
          headers: {
            authorization: token,
          },
        },
      )
      .then(response => {
        setFamilies(response.data);
      })
      .catch(error => {
        console.log('Erreur : ', error);
      });
  };

  const listFamilies = families.map(family => (
    <div className="card-button" key={family.ref}>
      <input
        type="radio"
        key={family.ref}
        id={family.ref}
        name="family"
        title={family.type}
        value={family.id}
        onChange={handleChange}
      />
      <label htmlFor={family.ref}>
        <ModelCard name={family.type} imgRef={family.ref} />
      </label>
    </div>
  ));

  return (
    <div>
      <Card isHover={false} className="container-card">
        <h4>Quel est le modèle de votre {ad.type} ?</h4>
        <div className="ad-list family-list">
          {families[1] ? listFamilies : <div>loading</div>}
        </div>
      </Card>
    </div>
  );
};

SelectFamily.displayName = 'SelectFamily';
SelectFamily.propTypes = {
  ad: PropTypes.object,
  setAd: PropTypes.func,
};

export default SelectFamily;

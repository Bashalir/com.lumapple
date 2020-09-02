import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Card from '../../../atoms/card/Card';
import CategoryCard from '../../../molecules/CategoryCard/CategoryCard';

import {firebaseAuth} from '../../../../providers/AuthProvider';

const SelectFamily = ({ad, setAd}) => {
  const {user} = useContext(firebaseAuth);

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
  }, [ad]);

  const getFamilies = () => {
    axios
      .get(
        `http://localhost:3030/api/families?ref=${ad.ref}`,
        {},
        {
          headers: {
            id_token: user.token,
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
    <div key={family.ref}>
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
        <CategoryCard name={family.type} />
      </label>
    </div>
  ));

  return (
    <div>
      <Card isHover={false}>
        <h4>Quel est le modèle de votre {ad.type} ?</h4>
        {families[1] ? listFamilies : <div>loading</div>}
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

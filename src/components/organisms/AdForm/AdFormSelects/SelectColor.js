import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Card from '../../../atoms/card/Card';
import CategoryCard from '../../../molecules/CategoryCard/CategoryCard';

import {firebaseAuth} from '../../../../providers/AuthProvider';

const SelectColor = ({ad, setAd}) => {
  const {user, token} = useContext(firebaseAuth);

  const [color, setColor] = useState();
  const [colors, setColors] = useState([]);

  const handleChange = e => {
    setColor({color: e.target.value});
    setAd({
      ...ad,
      color: e.target.value,
      colorRef: e.target.title,
    });
  };

  useEffect(() => {
    getColors();
  }, [ad]);

  const getColors = () => {
    axios
      .get(
        `http://localhost:3030/api/colors?ref=${ad.familyRef}`,
        {},
        {
          headers: {
            authorization: token,
          },
        },
      )
      .then(response => {
        setColors(response.data);
      })
      .catch(error => {
        console.log('Erreur : ', error);
      });
  };

  const listColors = colors.map(color => (
    <div key={color.ref}>
      <input
        type="radio"
        id={color.ref}
        name="color"
        title={color.name_fr}
        value={color.id}
        onChange={handleChange}
      />
      <label htmlFor={color.ref}>
        <CategoryCard name={color.name_fr} />
      </label>
    </div>
  ));

  return (
    <div>
      <Card isHover={false}>
        <h4>Quel est la couleur de votre {ad.familyType} ?</h4>
        {colors[1] ? listColors : <div>loading</div>}
      </Card>
    </div>
  );
};

SelectColor.displayName = 'SelectColor';
SelectColor.propTypes = {
  ad: PropTypes.object,
  setAd: PropTypes.func,
};

export default SelectColor;

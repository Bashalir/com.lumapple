import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Card from '../../../atoms/card/Card';
import {firebaseAuth} from '../../../../providers/AuthProvider';
import ColorCard from '../../../molecules/ColorCard/ColorCard';

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
  }, [ad.family, ad.color]);

  const getColors = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_PATH}/api/colors?ref=${ad.familyRef}`,
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
    <div className="card-button" key={color.ref}>
      <input
        type="radio"
        id={color.ref}
        name="color"
        title={color.name_fr}
        value={color.id}
        onChange={handleChange}
      />
      <label htmlFor={color.ref}>
        <ColorCard name={color.name_fr} colorRGB={color.rgb} />
      </label>
    </div>
  ));

  return (
    <div>
      <Card isHover={false} className="container-card">
        <h4>Quel est la couleur de votre {ad.familyType} ?</h4>
        <div className="ad-list category-list">
          {colors[1] ? listColors : <div>loading</div>}
        </div>
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

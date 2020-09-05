import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Card from '../../../atoms/card/Card';
import CategoryCard from '../../../molecules/CategoryCard/CategoryCard';

const SelectScreenStates = ({ad, setAd}) => {
  const [screenState, setScreenState] = useState();

  const handleChange = e => {
    setScreenState({screenState: e.target.value});
    setAd({
      ...ad,
      screenState: e.target.value,
      screenStateRef: e.target.id,
      screenStateTitle: e.target.title,
    });
  };

  const screenStates = [
    {id: 1, name: 'Intact', ref: 'mint'},
    {id: 2, name: 'Micro-rayures', ref: 'light_scratches'},
    {id: 3, name: 'Rayures', ref: 'scratches'},
    {id: 4, name: 'Cassé', ref: 'broken'},
  ];

  const listScreenStates = screenStates.map(screenState => (
    <div className="card-button" key={screenState.id}>
      <input
        type="radio"
        id={`screenState_${screenState.ref}`}
        name="screenState"
        title={screenState.name}
        value={screenState.id}
        onChange={handleChange}
      />
      <label htmlFor={`screenState_${screenState.ref}`}>
        <CategoryCard imgRef={screenState.ref} name={screenState.name} />
      </label>
    </div>
  ));

  return (
    <div>
      <Card isHover={false} className="container-card">
        <h4>Quel est l&#39état de l&#39écran de votre {ad.familyType} ?</h4>
        <div className="ad-list category-list">
          {screenStates[1] ? listScreenStates : <div>loading</div>}
        </div>
      </Card>
    </div>
  );
};

SelectScreenStates.displayName = 'SelectScreenStates';
SelectScreenStates.propTypes = {
  ad: PropTypes.object,
  setAd: PropTypes.func,
};

export default SelectScreenStates;

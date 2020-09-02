import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Card from '../../../atoms/card/Card';
import CategoryCard from '../../../molecules/CategoryCard/CategoryCard';

const SelectHullStates = ({ad, setAd}) => {
  const [hullState, setHullState] = useState();

  const handleChange = e => {
    setHullState({hullState: e.target.value});
    setAd({
      ...ad,
      hullState: e.target.value,
      hullStateRef: e.target.id,
      hullStateTitle: e.target.title,
    });
  };

  const hullStates = [
    {id: 1, name: 'Intact', ref: 'mint'},
    {id: 2, name: 'Micro-rayures', ref: 'light_scratches'},
    {id: 3, name: 'Rayures', ref: 'scratches'},
    {id: 4, name: 'Cassé', ref: 'broken'},
  ];

  const listHullStates = hullStates.map(hullState => (
    <div key={hullState.id}>
      <input
        type="radio"
        id={`hullState_${hullState.ref}`}
        name="hullStates"
        title={hullState.name}
        value={hullState.id}
        onChange={handleChange}
      />
      <label htmlFor={`hullState_${hullState.ref}`}>
        <CategoryCard name={hullState.name} />
      </label>
    </div>
  ));

  return (
    <div>
      <Card isHover={false}>
        <h4>Quel est l&#39;état général de votre {ad.familyType} ?</h4>
        {hullStates[1] ? listHullStates : <div>loading</div>}
      </Card>
    </div>
  );
};

SelectHullStates.displayName = 'SelectHullStates';
SelectHullStates.propTypes = {
  ad: PropTypes.object,
  setAd: PropTypes.func,
};

export default SelectHullStates;

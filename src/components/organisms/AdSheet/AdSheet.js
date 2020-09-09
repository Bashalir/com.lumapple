import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';

import Card from '../../atoms/card/Card';
import StyledAdSheet from './styles/StyledAdSheet';
import ModelCard from '../../molecules/ModelCard/ModelCard';
import ColorCard from '../../molecules/ColorCard/ColorCard';
import CategoryCard from '../../molecules/CategoryCard/CategoryCard';
import {firebaseAuth} from '../../../providers/AuthProvider';

const AdSheet = ({ad}) => {
  const {user} = useContext(firebaseAuth);
  return (
    <StyledAdSheet>
      <Card isHover={false} className="adsheet">
        <div className="adsheet_short_description">
          {ad && <h1>{ad.Family.type}</h1>}
          {ad && <h2>{ad.Family.short_description}</h2>}
          {ad && <h2>{ad.Family.description}</h2>}
        </div>
        {ad && <span className="adsheet_price">{ad.price} €</span>}
        {ad && (
          <img
            className="adsheet_photo"
            src={`https://res.cloudinary.com/lumapple/image/upload/img/${ad.Family.ref}.png`}
            name={ad.Family.type}
          />
        )}
        <div className="adsheet_options">
          {ad && ad.Color && (
            <ColorCard
              className="adsheet_options__card"
              isHover={false}
              name={ad.Color.nameFr}
              colorRGB={ad.Color.rgb}
            />
          )}
          {ad && ad.Storage && (
            <CategoryCard
              isHover={false}
              className="adsheet_options__card"
              imgRef={'storage'}
              name={`${ad.Storage.capacity} Go`}
            />
          )}
          {ad && ad.HullState && (
            <CategoryCard
              isHover={false}
              className="adsheet_options__card"
              imgRef={ad.HullState.ref}
              name={'Général'}
            />
          )}
          {ad && ad.ScreenState && (
            <CategoryCard
              isHover={false}
              className="adsheet_options__card"
              imgRef={ad.ScreenState.ref}
              name={'Écran'}
            />
          )}
        </div>
        <div className="adsheet_contact">
          {ad && <h1>{ad.User.displayName}</h1>}
          {ad && user.displayName ? (
            <h1>{ad.User.mail}</h1>
          ) : (
            <h5>Veuillez vous connecter{`\n`}pour voir l adresse email</h5>
          )}
        </div>
        <div className="adsheet_descriptions">
          <h4>Caractéristiques techniques</h4>
          <ul>
            {ad && ad.Family.specs.map((spec, i) => <li key={i}>{spec}</li>)}
          </ul>
        </div>
      </Card>
    </StyledAdSheet>
  );
};

export default AdSheet;

AdSheet.displayName = 'AdSheet';
AdSheet.propTypes = {
  ad: PropTypes.object.isRequired,
};

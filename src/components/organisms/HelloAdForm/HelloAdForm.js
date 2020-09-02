import React from 'react';
import Card from '../../atoms/card/Card';
import StyledHelloAdForm from './styles/StyledHelloAdForm';
import {defaultTheme} from '../../../themes/index';
import Button from '../../atoms/button/Button';
import {Link} from 'react-router-dom';

const HelloAdForm = () => {
  return (
    <StyledHelloAdForm>
      <Card isHover={false}>
        <h3>Bonjour ! </h3>
        <span>
          Connectez-vous ou créez un compte pour déposer votre annonce
        </span>
        <div className="connection">
          <Link to={'/se-connecter'}>
            <Button
              name="Se connecter"
              textColor={defaultTheme.statusValidColor}
              borderColor={defaultTheme.statusValidColor}
            />
          </Link>
          <Link to={'/s-enregistrer'}>
            <Button
              name="Créer un compte"
              textColor={defaultTheme.statusFocusColor}
              borderColor={defaultTheme.statusFocusColor}
            />
          </Link>
        </div>
      </Card>
    </StyledHelloAdForm>
  );
};

export default HelloAdForm;

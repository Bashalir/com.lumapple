import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

import StyledPageTemplate from './styles/StyledPageTemplate';
import StyledHeader from './styles/StyledHeader';
import StyledMain from './styles/StyledMain';
import StyledFooter from './styles/StyledFooter';
import RouteWithSubRoutes from '../../../router/RouteWithSubRoutes';

function PageTemplate({header, main, footer, routes}) {
  return (
    <StyledPageTemplate>
      <StyledHeader>{header}</StyledHeader>
      <StyledMain>
        <Switch>
          <Route exact path="/">
            {main}
          </Route>

          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </StyledMain>

      <StyledFooter>{footer}</StyledFooter>
    </StyledPageTemplate>
  );
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  routes: PropTypes.array.isRequired,
};

export default PageTemplate;

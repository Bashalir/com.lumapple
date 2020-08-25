import React from 'react';
import PropTypes from 'prop-types';

import StyledPageTemplate from './styles/StyledPageTemplate';
import StyledHeader from './styles/StyledHeader';
import StyledMain from './styles/StyledMain';
import StyledFooter from './styles/StyledFooter';

function PageTemplate({header, main, footer, ...props}) {
  return (
    <StyledPageTemplate>
      <StyledHeader>{header}</StyledHeader>
      <StyledMain>{main}</StyledMain>
      <StyledFooter>{footer}</StyledFooter>
    </StyledPageTemplate>
  );
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default PageTemplate;

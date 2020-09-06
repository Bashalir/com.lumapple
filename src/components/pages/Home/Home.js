import React from 'react';
import PropTypes from 'prop-types';

import PageTemplate from '../../templates/PageTemplate/PageTemplate';
import NavBar from '../../organisms/navbar/NavBar';
import Footer from '../../organisms/Footer/Footer';
import AdPage from '../AdPage/AdPage';

function Home({routes}) {
  return (
    <PageTemplate
      routes={routes}
      header={<NavBar />}
      main={<AdPage />}
      footer={<Footer />}
    />
  );
}

Home.propTypes = {
  routes: PropTypes.array.isRequired,
};
export default Home;

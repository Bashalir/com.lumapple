import React from 'react';

import PageTemplate from '../../templates/PageTemplate/PageTemplate';
import NavBar from '../../organisms/navbar/NavBar';
import Footer from '../../organisms/Footer/Footer';

function Main() {
  return <div>MAIN</div>;
}

function Home() {
  return (
    <PageTemplate header={<NavBar />} main={<Main />} footer={<Footer />} />
  );
}

export default Home;

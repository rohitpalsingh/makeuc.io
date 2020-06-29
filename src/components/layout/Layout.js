/* eslint-disable react/prop-types */
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import FooterImage from '../FooterImage';
import ScrollTopButton from '../ScrollTopButton';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <ScrollTopButton />
        {children}
        <FooterImage />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

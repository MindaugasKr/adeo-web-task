import React, { Component } from 'react';

import AboutMini from '../../page-blocks/about-mini';
import Contact from '../../page-blocks/contact';
import CTA from '../../page-blocks/CTA';
import Footer from '../../page-blocks/footer';
import Header from '../../page-blocks/header';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <CTA />
        <AboutMini />
        <Contact />
        <Footer />
      </div>
    );
  };
}

import React from 'react';

import ContentContainer from '../../containers/content';

import SiteLogo from '../../page-block-parts/site-logo';
import NavigatioPrimary from '../../page-block-parts/navigation-primary';
import NavigatioSecondary from '../../page-block-parts/navigation-secondary';

import './header.scss';

export default () => (
  <header className='theme-blue-white  header'>
    <ContentContainer additionalCSS='header__grid'>
      <SiteLogo additionalCSS='header__site-logo' />
      <NavigatioSecondary additionalCSS='header__nav-secondary' />
      <NavigatioPrimary additionalCSS='header__nav-primary' />
    </ContentContainer>
  </header>
);
import React from 'react';

import ContentContainer from '../../containers/content';
import SiteLogo from '../../page-block-parts/site-logo';
import NavigationPrimary from '../../page-block-parts/navigation-primary';

import './footer.scss';

export default () => (
  <div className='footer  theme-dark-gray-white'>
    <ContentContainer additionalCSS='footer__content'>
      <NavigationPrimary disableSubmenus additionalCSS='footer__nav-primary' />
      <p className='footer__text'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam laboriosam rem dolorum suscipit cupiditate voluptate dicta sequi fuga, quo facilis distinctio quod esse error ex qui ut. Optio, officiis sunt?
      </p>
      <span className='footer__copyright'>&copy; <SiteLogo additionalCSS='footer__copyright-logo' /> All rights reserved</span>
    </ContentContainer>
  </div>
);
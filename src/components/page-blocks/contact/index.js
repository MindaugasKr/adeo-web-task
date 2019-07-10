import React from 'react';

import ContentContainer from '../../containers/content';

import ContactForm from '../../page-block-parts/contact-form';

import './contact.scss';

export default () => (
  <div className='contact'>
    <ContentContainer>
      <h1 className='contact__title'>
        WELCOME
        <span className='contact__line'>━</span>
      </h1>

      <div className='contact__content'>
        <div className='contact__description'>
          <p className='contact__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, omnis voluptas quae non impedit nostrum minima exercitationem accusamus modi tenetur, suscipit architecto, quasi consectetur labore nobis eum earum odit voluptatibus.</p>
          <p className='contact__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, omnis voluptas quae non impedit nostrum minima exercitationem accusamus modi tenetur, suscipit architecto, quasi consectetur labore nobis eum earum odit voluptatibus.</p>
          <p className='contact__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, omnis voluptas quae non impedit nostrum minima exercitationem accusamus modi tenetur, suscipit architecto, quasi consectetur labore nobis eum earum odit voluptatibus.</p>
        </div>

        <ContactForm additionalBtnCSS={'theme-white-blue  theme-white-blue__btn'} />
      </div>
    </ContentContainer>
  </div>
);
import React from 'react';

import ContentContainer from '../../containers/content';

import Button1 from '../../page-block-parts/button-1';

import image from "../../../images/curiouscat.jpg";
import './CTA.scss';

export default () => (
  <div className='CTA'>
    <ContentContainer additionalCSS='CTA__content'>

      <div className='theme-blue-white  CTA__welcome'>
        <div>
          <h1 className='CTA__welcome-title'>
            WELCOME
          <span className='CTA__welcome-line'>━</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi incidunt quis at illo beatae? Expedita ut nemo possimus ipsam!</p>
        </div>
        <Button1 additionalCSS='theme-blue-white CTA__welcome-btn'>LEARN MORE</Button1>
      </div>

      <div className='theme-light-gray-dark-gray  CTA__design'>
        <img className='CTA__design-img' src={image} alt=""/>
        <div className='CTA__design-text-block'>
          <h2 className='CTA__design-title' >UI/UX DESIGN</h2>
          <p className='CTA__design-p' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, aperiam.</p>
          <p className='CTA__design-p' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, aperiam.</p>
        </div>
      </div>

    </ContentContainer>
  </div>
);
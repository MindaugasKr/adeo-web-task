import React from 'react';

import Button1 from '../button-1';

import './contact-form.scss';

export default props => (
  <form className='contact-form'>
    <h4 className='contact-form__title'>NAME</h4>
    <input className='contact-form__input' type="text"/>
    <h4 className='contact-form__title'>EMAIL</h4>
    <input className='contact-form__input' type="text" />
    <h4 className='contact-form__title'>MESSAGE</h4>
    <textarea className='contact-form__textArea' name="" id="" cols="30" rows="10"></textarea>
    <br/>
    <Button1 additionalCSS={props.additionalBtnCSS}>SEND</Button1>
  </form>
);
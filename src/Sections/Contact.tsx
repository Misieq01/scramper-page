import React from "react";
import {ReactComponent as UnDraw} from '../assets/unDraw2.svg'

const Contact = () => {
  return (
    <div className="contact">
      <UnDraw className='contact__img'/>
      <span>I'll be happy to put your ideas in action</span>
      <div className="contact__wrapper">
        <span className="contact__wrapper__contact">Contact</span>
        <span>bartosz2000walczak@gmail.com</span>
      </div>
    </div>
  );
};

export default Contact;

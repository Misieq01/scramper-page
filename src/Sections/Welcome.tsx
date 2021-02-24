import React from "react";
import {ReactComponent as Img} from '../assets/unDraw1.svg'

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome__wrapper">
        <h2>Simply way</h2>
        <h2>Ultimate solution</h2>
        <h3>Collecting data has never been easier</h3>
        <div className="welcome__buttonsWrapper">
          <button className='welcome__button'>Download</button>
          <button className='welcome__button'>Github</button>
        </div>
            <Img className='welcome__img'/>
      </div>
    </div>
  );
};

export default Welcome;
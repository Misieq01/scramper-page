import React from "react";
import {ReactComponent as Img} from '../assets/unDraw1.svg'
import Button from "../components/Button";

const Mobile = () => {
 return (
   <div className="welcome">
     <div className="welcome__wrapper">
       <h2>Simply way</h2>
       <h2>Ultimate solution</h2>
       <h3>Collecting data has never been easier</h3>
       <div className="welcome__buttonsWrapper">
         <Button  type="github" />
         <Button  type="download" />
       </div>
       <Img className="welcome__img" />
     </div>
   </div>
 );
}

const PC = () => {
  return (
    <div className="welcome" id='welcome'>
      <div className="welcome__wrapper">
        <div>
          <h2>Simply way</h2>
          <h2>Ultimate solution</h2>
          <h3>Collecting data has never been easier</h3>
          <div className="welcome__buttonsWrapper">
            <Button type="github" />
            <Button type="download" />
          </div>
        </div>
      </div>
        <Img className="welcome__img" />
    </div>
  );
}


const Welcome = () => {
  return window.innerWidth > 1200 ? <PC/> : <Mobile/>
};

export default Welcome;

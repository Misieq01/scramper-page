import React from 'react'

import {ReactComponent as Icon1} from '../assets/icon1.svg'
import {ReactComponent as Icon2} from '../assets/icon2.svg'
import {ReactComponent as Icon3} from '../assets/icon3.svg'

type TBox = {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  title: string;
  text: string;
};

const Box = ({Icon,title,text}:TBox) => {
    return (
      <div className="content__box">
        <Icon className='content__box__icon'/>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    );
}


const Content = () => {
    return (
      <div className="content" id='content'>
        <div className="content__text-wrapper">
          <h2>Everything in one tool</h2>
        </div>
        <div className="content__wrapper">
          <Box Icon={Icon2} title="Configure" text="Scrap dozens of pages at once thanks to multipage utility" />
          <Box Icon={Icon1} title="Scrap" text="Highly configurable system to address all of your needs" />
          <Box Icon={Icon3} title="Fix" text="Build in function to finding errors and automaticly fixing them" />
        </div>
      </div>
    );
}

export default Content
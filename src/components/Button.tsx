import React from 'react'

type TButton = {
    text:string
    type: 'filled' | 'border'
}

const Button = ({ text, type }: TButton) => {
  return <div className={`button-${type}`}>{text}</div>;
};
export default Button
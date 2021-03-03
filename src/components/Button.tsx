import React from 'react'

type TButton = {
  text: string;
  type: "filled" | "border";
  style?: React.CSSProperties;
};

const Button = ({ text, type,style }: TButton) => {
  return <div className={`button-${type}`} style={style}>{text}</div>;
};
export default Button
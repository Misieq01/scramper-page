import React from 'react'

type TButton = {
  type: "github" | "download";
  style?: React.CSSProperties;
};

const Button = ({ type,style }: TButton) => {
  return type === "download" ? (
    <div className={`button-filled`} style={style}>
      <a href="https://www.file.io/download/1zCju6BqRCuw">Download</a>
    </div>
  ) : (
    <div className={`button-border`} style={style}>
      <a href="https://github.com/Misieq01/Scrapper">Github</a>
    </div>
  );
};
export default Button
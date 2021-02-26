import React from "react";
import {ReactComponent as Arrow} from '../assets/arrow.svg'
import DownloadButton from "../components/Button";

const Upload = () => {
  return (
    <div className="upload">
      <div className="upload__text-wrapper">
        <h2>Store data wherever you want</h2>
        <div></div>
      </div>
      <div className="upload__element">
        <Arrow />
        <span>Store as json on your local machine</span>
      </div>
      <div className="upload__element">
        <Arrow />
        <span>Upload directly to your firebase collection</span>
      </div>
      <button>Download</button>
    </div>
  );
};

export default Upload;

import React from "react";
import { ReactComponent as Arrow } from "../assets/arrow.svg";

const Upload = () => {
  return     <div className="upload">
      <div className="upload__text-wrapper">
        <h3>Store data wherever you want</h3>
        <div></div>
      </div>
      <div>
        <div className="upload__element">
          <Arrow />
          <span>Store as json on your local machine</span>
        </div>
        <div className="upload__element">
          <Arrow />
          <span>Upload directly to your firebase collection</span>
        </div>
      </div>
    </div>
};

export default Upload;

import React from "react";

const Upload = () => {
  return (
    <div className="upload">
      <h2>You decide what to do with your data</h2>
      <div>Store as json on your local machine</div>
      <div>Upload directly to your firebase collection</div>
      <button>Download</button>
    </div>
  );
};

export default Upload;

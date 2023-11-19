import React from "react";

const Skibidi505 = () => {
  return (
    <div>
      <h1>skibidi 505</h1>
      <video width="720" height="1280" controls autoPlay>
        <source
          src={`${process.env.PUBLIC_URL}/resources/Skibidi505.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Skibidi505;

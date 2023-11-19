import React from "react";

const SkibidiDaydreams = () => {
  return (
    <div>
      <h1>skibidi daydreams</h1>
      <video width="720" height="1280" controls autoPlay>
        <source
          src={`${process.env.PUBLIC_URL}/resources/SkibidiDaydreams.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SkibidiDaydreams;

// VideoPlayer.js
import React from "react";

const VideoPlayer = () => {
  return (
    <div>
      <h1>Skibidi Daydreams Video</h1>
      <video width="640" height="360" controls>
        <source
          src={process.env.PUBLIC_URL + "/SkibidiDaydreams.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

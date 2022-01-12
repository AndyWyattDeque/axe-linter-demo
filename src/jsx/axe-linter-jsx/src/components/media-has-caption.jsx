import React from "react";

const MediaHasCaptionSucceed = () => (
  <div>
    <audio>
      <track kind="captions" {...props} />
    </audio>
    <video>
      <track kind="captions" {...props} />
    </video>
    <video muted {...props}></video>
  </div>
);

const MediaHasCaptionFailed = () => (
  <div>
    <audio {...props} />
    <video {...props} />
  </div>
);

const MediaHasCaption = () => (
  <div>
    <MediaHasCaptionSucceed />
    <MediaHasCaptionFailed />
  </div>
);

export default MediaHasCaption;

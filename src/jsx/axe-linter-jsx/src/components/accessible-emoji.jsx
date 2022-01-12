import React from "react";

const AccessibleEmojiSucceed = () => (
  <div>
    <span role="img" aria-label="Snowman">
      &#9731;
    </span>
    <span role="img" aria-label="Panda">
      🐼
    </span>
    <span role="img" aria-labelledby="panda1">
      🐼
    </span>
  </div>
);

const AccessibleEmojiFailed = () => (
  <div>
    <span>🐼</span>
    <i role="img" aria-label="Panda">
      🐼
    </i>
  </div>
);

const AccessibleEmoji = () => (
  <div>
    <AccessibleEmojiSucceed />
    <AccessibleEmojiFailed />
  </div>
);

export default AccessibleEmoji;

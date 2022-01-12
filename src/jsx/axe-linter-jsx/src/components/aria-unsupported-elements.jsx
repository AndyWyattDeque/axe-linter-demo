import React from "react";

const AriaUnsupportedElementsSucceed = () => (
  <div>
    <meta charset="UTF-8" />
  </div>
);

const AriaUnsupportedElementsFailed = () => (
  <div>
    <meta charset="UTF-8" aria-hidden="false" />
  </div>
);

const AriaUnsupportedElements = () => (
  <div>
    <AriaUnsupportedElementsSucceed />
    <AriaUnsupportedElementsFailed />
  </div>
);

export default AriaUnsupportedElements;

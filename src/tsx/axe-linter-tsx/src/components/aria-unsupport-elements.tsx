import React from "react";

const AriaUnsupportedElementsSucceed: React.FC = () => (
  <div>
    <meta charset="UTF-8" />
  </div>
);

const AriaUnsupportedElementsFailed: React.FC = () => (
  <div>
    <meta charset="UTF-8" aria-hidden="false" />
  </div>
);

const AriaUnsupportedElements: React.FC = () => (
  <div>
    <AriaUnsupportedElementsSucceed />
    <AriaUnsupportedElementsFailed />
  </div>
);

export default AriaUnsupportedElements;

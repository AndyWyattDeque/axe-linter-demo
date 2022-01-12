import React from "react";

const NoDistractingElementsSucceed = () => (
  <div>
    <div />
  </div>
);

const NoDistractingElementsFailed = () => (
  <div>
    <marquee />
    <blink />
  </div>
);

const NoDistractingElements = () => (
  <div>
    <NoDistractingElementsSucceed />
    <NoDistractingElementsFailed />
  </div>
);

export default NoDistractingElements;

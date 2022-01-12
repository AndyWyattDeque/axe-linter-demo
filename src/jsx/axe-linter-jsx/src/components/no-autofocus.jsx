import React from "react";

const NoAutofocusSucceed = () => (
  <div>
    <div />
  </div>
);

const NoAutofocusFailed = () => (
  <div>
    <div  />
    <div  />
    <div  />
    <div  />
  </div>
);

const NoAutofocus = () => (
  <div>
    <NoAutofocusSucceed />
    <NoAutofocusFailed />
  </div>
);

export default NoAutofocus;

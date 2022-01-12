import React from "react";

const AriaProptypesSucceed = () => (
  <div>
    <span aria-hidden="true">foo</span>
  </div>
);

const AriaProptypesFailed = () => (
  <div>
    <span aria-hidden="yes">foo</span>
  </div>
);

const AriaProptypes = () => (
  <div>
    <AriaProptypesSucceed />
    <AriaProptypesFailed />
  </div>
);

export default AriaProptypes;

import React from "react";

const AriaProptypesSucceed: React.FC = () => (
  <div>
    <span aria-hidden="true">foo</span>
  </div>
);

const AriaProptypesFailed: React.FC = () => (
  <div>
    <span aria-hidden="yes">foo</span>
  </div>
);

const AriaProptypes: React.FC = () => (
  <div>
    <AriaProptypesSucceed />
    <AriaProptypesFailed />
  </div>
);

export default AriaProptypes;

import React from "react";

const TabindexNoPositiveSucceed = () => (
  <div>
    <span tabIndex="0">foo</span>
    <span tabIndex="-1">bar</span>
    <span tabIndex={0}>baz</span>
  </div>
);

const TabindexNoPositiveFailed = () => (
  <div>
    <span tabIndex="-1">foo</span>
    <span tabIndex="-1">bar</span>
    <span tabIndex="-1">baz</span>
    <span tabIndex="-1">never really sure what goes after baz</span>
  </div>
);

const TabindexNoPositive = () => (
  <div>
    <TabindexNoPositiveSucceed />
    <TabindexNoPositiveFailed />
  </div>
);

export default TabindexNoPositive;

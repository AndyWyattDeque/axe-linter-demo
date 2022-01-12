import React from "react";

const AriaActiveDescendantHasTabIndexSucceed = () => (
  <div>
    <CustomComponent />
    <CustomComponent aria-activedescendant={someID} />
    <CustomComponent aria-activedescendant={someID} tabIndex={0} />
    <CustomComponent aria-activedescendant={someID} tabIndex={-1} />
    <div />
    <input />
    <div tabIndex={0} />
    <div aria-activedescendant={someID} tabIndex={0} />
    <div aria-activedescendant={someID} tabIndex="0" />
    <div aria-activedescendant={someID} tabIndex="-1" />
    <input aria-activedescendant={someID} />
    <input aria-activedescendant={someID} tabIndex={0} />
  </div>
);

const AriaActiveDescendantHasTabIndexFailed = () => (
  <div>
    <div aria-activedescendant={someID} />
    <div aria-activedescendant={someID} tabIndex={-1} />
    <div aria-activedescendant={someID} tabIndex="-1" />
    <input aria-activedescendant={someID} tabIndex={-1} />
  </div>
);

const AriaActiveDescendantHasTabIndex = () => (
  <div>
    <AriaActiveDescendantHasTabIndexSucceed />
    <AriaActiveDescendantHasTabIndexFailed />
  </div>
);

export default AriaActiveDescendantHasTabIndex;

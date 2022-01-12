import React from "react";

const RoleHasRequiredAriaPropsSucceed = () => (
  <div>
    {/* <!-- Good: the checkbox role requires the aria-checked state --> */}
    <span
      role="checkbox"
      aria-checked="false"
      aria-labelledby="foo"
      tabindex="0"
    ></span>
  </div>
);

const RoleHasRequiredAriaPropsFailed = () => (
  <div>
    {/* <!-- Bad: the checkbox role requires the aria-checked state --> */}
    <span role="checkbox" aria-labelledby="foo" tabindex="0"></span>
  </div>
);

const RoleHasRequiredAriaProps = () => (
  <div>
    <RoleHasRequiredAriaPropsSucceed />
    <RoleHasRequiredAriaPropsFailed />
  </div>
);

export default RoleHasRequiredAriaProps;

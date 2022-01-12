import React from "react";

const RoleSupportsAriaPropsSucceed = () => (
  <div>
    {/* <!-- Good: the radiogroup role does support the aria-required property --> */}
    <ul role="radiogroup" aria-required aria-labelledby="foo">
      <li tabIndex="-1" role="radio" aria-checked="false">
        Rainbow Trout
      </li>
      <li tabIndex="-1" role="radio" aria-checked="false">
        Brook Trout
      </li>
      <li tabIndex="0" role="radio" aria-checked="true">
        Lake Trout
      </li>
    </ul>
  </div>
);

const RoleSupportsAriaPropsFailed = () => (
  <div>
    {/* <!-- Bad: the radio role does not support the aria-required property --> */}
    <ul role="radiogroup" aria-labelledby="foo">
      <li aria-required tabIndex="-1" role="radio" aria-checked="false">
        Rainbow Trout
      </li>
      <li aria-required tabIndex="-1" role="radio" aria-checked="false">
        Brook Trout
      </li>
      <li aria-required tabIndex="0" role="radio" aria-checked="true">
        Lake Trout
      </li>
    </ul>
  </div>
);

const RoleSupportsAriaProps = () => (
  <div>
    <RoleSupportsAriaPropsSucceed />
    <RoleSupportsAriaPropsFailed />
  </div>
);

export default RoleSupportsAriaProps;

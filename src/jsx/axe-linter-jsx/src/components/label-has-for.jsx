import React from "react";
// This rule was deprecated in v6.1.0.

const LabelHasForSucceed = () => (
  <div>
    <label htmlFor="firstName">
      <input type="text" id="firstName" />
      First Name
    </label>
  </div>
);

const LabelHasForFailed = () => (
  <div>
    <input type="text" id="firstName" />
    <label>First Name</label>
  </div>
);

const LabelHasFor = () => (
  <div>
    <LabelHasForSucceed />
    <LabelHasForFailed />
  </div>
);

export default LabelHasFor;

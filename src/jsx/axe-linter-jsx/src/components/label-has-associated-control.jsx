import React from "react";

const LabelHasAssociatedControlSucceed = () => (
  <div>
    <label>
      <input type="text" />
      Surname
    </label>
  </div>
);

const LabelHasAssociatedControlFailed = () => (
  <div>
    <input type="text" />
    <label>Surname</label>
  </div>
);

const LabelHasAssociatedControl = () => (
  <div>
    <LabelHasAssociatedControlSucceed />
    <LabelHasAssociatedControlFailed />
  </div>
);

export default LabelHasAssociatedControl;

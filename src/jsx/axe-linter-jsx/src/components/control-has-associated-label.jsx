import React from "react";

const ControlHasAssociatedLabelSucceed = () => (
  <div>
    <button type="button" aria-label="Save" class="icon-save" />
  </div>
);

const ControlHasAssociatedLabelFailed = () => (
  <div>
    <button type="button" class="icon-save" />
  </div>
);

const ControlHasAssociatedLabel = () => (
  <div>
    <ControlHasAssociatedLabelSucceed />
    <ControlHasAssociatedLabelFailed />
  </div>
);

export default ControlHasAssociatedLabel;

import React from "react";

const AutoCompleteValidSucceed = () => (
  <div>
    <input type="text" autocomplete="name" />

    <MyInput autocomplete="incorrect" />
  </div>
);

const AutoCompleteValidFailed = () => (
  <div>
    <input type="text" autocomplete="incorrect" />

    <input type="email" autocomplete="url" />

    <MyInput autocomplete="incorrect" />
  </div>
);

const AutoCompleteValid = () => (
  <div>
    <AutoCompleteValidSucceed />
    <AutoCompleteValidFailed />
  </div>
);

export default AutoCompleteValid;

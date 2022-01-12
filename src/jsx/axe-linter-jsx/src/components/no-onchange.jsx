import React from "react";

const NoOnchangeSucceed = () => (
  <div>
    <select onBlur={updateModel}>
      <option />
    </select>

    <select>
      <option onBlur={handleOnBlur} onChange={handleOnChange} />
    </select>
  </div>
);

const NoOnchangeFailed = () => (
  <div>
    <select onChange={updateModel} />
  </div>
);

const NoOnchange = () => (
  <div>
    <NoOnchangeSucceed />
    <NoOnchangeFailed />
  </div>
);

export default NoOnchange;

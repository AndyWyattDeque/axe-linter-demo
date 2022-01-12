import React from "react";

const AriaPropsSucceed = () => (
  <div>
    <div id="address_label">Enter your address</div>
    <input aria-labelledby="address_label"></input>
  </div>
);

const AriaPropsFailed = () => (
  <div>
    <div id="address_label">Enter your address</div>
    <input aria-labelledby="address_label"></input>
  </div>
);

const AriaProps = () => (
  <div>
    <AriaPropsSucceed />
    <AriaPropsFailed />
  </div>
);

export default AriaProps;

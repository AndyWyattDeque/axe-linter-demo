import React from 'react'

const AriaPropsSucceed: React.FC = () => (
  <div>
    <div id="address_label">Enter your address</div>
    <input aria-labelledby="address_label"></input>
  </div>
);

const AriaPropsFailed: React.FC = () => (
  <div>
    <div id="address_label">Enter your address</div>
    <input aria-labeledby="address_label"></input>
  </div>
);

const AriaProps: React.FC = () => (
  <div>
    <AriaPropsSucceed />
    <AriaPropsFailed />
  </div>
);

export default AriaProps
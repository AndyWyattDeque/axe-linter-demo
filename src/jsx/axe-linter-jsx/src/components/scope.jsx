import React from "react";

const ScopeSucceed = () => (
  <div>
    <th scope="col" />
    <th scope={scope} />
  </div>
);

const ScopeFailed = () => (
  <div>
    <div scope />
  </div>
);

const Scope = () => (
  <div>
    <ScopeSucceed />
    <ScopeFailed />
  </div>
);

export default Scope;

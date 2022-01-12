import React from "react";

const NoAccessKeySucceed = () => (
  <div>
    <div />
  </div>
);

const NoAccessKeyFailed = () => (
  <div>
    <div accessKey="h" />
  </div>
);

const NoAccessKey = () => (
  <div>
    <NoAccessKeySucceed />
    <NoAccessKeyFailed />
  </div>
);

export default NoAccessKey;

import React from "react";

const IframeHasTitleSucceed = () => (
  <div>
    <iframe title="This is a unique title" />
    <iframe title={uniqueTitle} />
  </div>
);

const IframeHasTitleFailed = () => (
  <div>
    <iframe />
    <iframe {...props} />
    <iframe title="" />
    <iframe title={""} />
    <iframe title={``} />
    <iframe title={undefined} />
    <iframe title={false} />
    <iframe title={true} />
    <iframe title={42} />
  </div>
);

const IframeHasTitle = () => (
  <div>
    <IframeHasTitleSucceed />
    <IframeHasTitleFailed />
  </div>
);

export default IframeHasTitle;

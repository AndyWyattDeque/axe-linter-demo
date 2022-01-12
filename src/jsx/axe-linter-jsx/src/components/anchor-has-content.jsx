import React from "react";

const AnchorHasContentSucceed = () => (
  <div>
    <a>Anchor Content!</a>
    <a>
      <TextWrapper />
    </a>
    <a dangerouslySetInnerHTML={{ __html: "foo" }} />
  </div>
);

const AnchorHasContentFailed = () => (
  <div>
    <a />
    <a>
      <TextWrapper aria-hidden />
    </a>
  </div>
);

const AnchorHasContent = () => (
  <div>
    <AnchorHasContentSucceed />
    <AnchorHasContentFailed />
  </div>
);

export default AnchorHasContent;

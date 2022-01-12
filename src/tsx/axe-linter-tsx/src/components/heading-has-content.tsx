import React from "react";

const HeadingHasContentSucceed: React.FC = () => (
  <div>
    <h1>Heading Content!</h1>
    <h1 dangerouslySetInnerHTML={{ __html: "foo" }} />
  </div>
);

const HeadingHasContentFailed: React.FC = () => (
  <div>
    <h1 />
  </div>
);

const HeadingHasContent: React.FC = () => (
  <div>
    <HeadingHasContentSucceed />
    <HeadingHasContentFailed />
  </div>
);

export default HeadingHasContent;

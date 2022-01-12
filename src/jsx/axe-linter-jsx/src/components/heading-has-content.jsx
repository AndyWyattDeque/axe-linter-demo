import React from "react";

const HeadingHasContentSucceed = () => (
  <div>
    <h1>Heading Content!</h1>
    <h1>
      <TextWrapper />
    </h1>
    <h1 dangerouslySetInnerHTML={{ __html: "foo" }} />
  </div>
);

const HeadingHasContentFailed = () => (
  <div>
    <h1 />
    <h1>
      <TextWrapper aria-hidden />
    </h1>
  </div>
);

const HeadingHasContent = () => (
  <div>
    <HeadingHasContentSucceed />
    <HeadingHasContentFailed />
  </div>
);

export default HeadingHasContent;

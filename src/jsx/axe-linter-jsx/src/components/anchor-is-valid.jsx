import React from "react";

const AnchorIsValidSucceed = () => (
  <div>
    <a href="https://github.com" />
    <a href="#section" />
    <a href="foo" />
    <a href="/foo/bar" />
    <a href={someValidPath} />
    <a href="https://github.com" onClick={foo} />
    <a href="#section" onClick={foo} />
    <a href="foo" onClick={foo} />
    <a href="/foo/bar" onClick={foo} />
    <a href={someValidPath} onClick={foo} />
  </div>
);

const AnchorIsValidFailed = () => (
  <div>
    <a onClick={foo} />
    <a href="#" onClick={foo} />
    <a href={"#"} onClick={foo} />
    <a href={`#`} onClick={foo} />
    <a href="javascript:void(0)" onClick={foo} />
    <a href={"javascript:void(0)"} onClick={foo} />
    <a href={`javascript:void(0)`} onClick={foo} />
    <a />
    <a href={undefined} />
    <a href={null} />
    <a href="#" />
    <a href={"#"} />
    <a href={`#`} />
    <a href="javascript:void(0)" />
    <a href={"javascript:void(0)"} />
    <a href={`javascript:void(0)`} />
  </div>
);

const AnchorIsValid = () => (
  <div>
    <AnchorIsValidSucceed />
    <AnchorIsValidFailed />
  </div>
);

export default AnchorIsValid;

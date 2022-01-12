import React from "react";

const LangSucceed = () => (
  <div>
    <html lang="en"></html>
    <html lang="en-US"></html>
  </div>
);

const LangFailed = () => (
  <div>
    <html></html>
    <html lang="foo"></html>
  </div>
);

const Lang = () => (
  <div>
    <LangSucceed />
    <LangFailed />
  </div>
);

export default Lang;

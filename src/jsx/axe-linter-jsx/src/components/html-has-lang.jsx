import React from "react";

const HtmlHasLangSucceed = () => (
  <div>
    <html lang="en"></html>
    <html lang="en-US"></html>
    <html lang={language}></html>
  </div>
);

const HtmlHasLangFailed = () => (
  <div>
    <html></html>
  </div>
);

const HtmlHasLang = () => (
  <div>
    <HtmlHasLangSucceed />
    <HtmlHasLangFailed />
  </div>
);

export default HtmlHasLang;

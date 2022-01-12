import React from "react";

const NoNoninteractiveTabindexSucceed = () => (
  <div>
    <div />
    <MyButton tabIndex={0} />
    <button />
    <button tabIndex="0" />
    <button tabIndex={0} />
    <div />
    <div tabIndex="-1" />
    <div role="button" tabIndex="0" />
    <div role="article" tabIndex="-1" />
    <article tabIndex="-1" />
  </div>
);

const NoNoninteractiveTabindexFailed = () => (
  <div>
    <div tabIndex="0" />
    <div role="article" tabIndex="0" />
    <article tabIndex="0" />
    <article tabIndex={0} />
  </div>
);

const NoNoninteractiveTabindex = () => (
  <div>
    <NoNoninteractiveTabindexSucceed />
    <NoNoninteractiveTabindexFailed />
  </div>
);

export default NoNoninteractiveTabindex;

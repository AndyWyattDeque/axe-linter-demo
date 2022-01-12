import React from "react";

const NoStaticElementInteractionsSucceed = () => (
  <div>
    <button onClick={() => {}} className="foo" />
    <div className="foo" onClick={() => {}} role="button" />
    <input type="text" onClick={() => {}} />
  </div>
);

const NoStaticElementInteractionsFailed = () => (
  <div>
    <div onClick={() => {}} />
  </div>
);

const NoStaticElementInteractions = () => (
  <div>
    <NoStaticElementInteractionsSucceed />
    <NoStaticElementInteractionsFailed />
  </div>
);

export default NoStaticElementInteractions;

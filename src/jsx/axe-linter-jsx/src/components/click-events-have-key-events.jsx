import React from "react";

const ClickEventsHaveKeyEventsSucceed = () => (
  <div>
    <div onClick={() => {}} onKeyDown={this.handleKeyDown} />
    <div onClick={() => {}} onKeyUp={this.handleKeyUp} />
    <div onClick={() => {}} onKeyPress={this.handleKeyPress} />
  </div>
);

const ClickEventsHaveKeyEventsFailed = () => (
  <div>
    <div onClick={() => {}} />
  </div>
);

const ClickEventsHaveKeyEvents = () => (
  <div>
    <ClickEventsHaveKeyEventsSucceed />
    <ClickEventsHaveKeyEventsFailed />
  </div>
);

export default ClickEventsHaveKeyEvents;

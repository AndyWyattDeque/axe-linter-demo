import React from "react";

const MouseEventsHaveKeyEventsSucceed = () => (
  <div>
    <div onMouseOver={() => void 0} onFocus={() => void 0} />
    <div onMouseOut={() => void 0} onBlur={() => void 0} />
    <div onMouseOver={() => void 0} onFocus={() => void 0} {...otherProps} />
    <div onMouseOut={() => void 0} onBlur={() => void 0} {...otherProps} />
  </div>
);

const MouseEventsHaveKeyEventsFailed = () => (
  <div>
    <div onMouseOver={() => void 0} />
    <div onMouseOut={() => void 0} />
    <div onMouseOver={() => void 0} {...otherProps} />
    <div onMouseOut={() => void 0} {...otherProps} />
  </div>
);

const MouseEventsHaveKeyEvents = () => (
  <div>
    <MouseEventsHaveKeyEventsSucceed />
    <MouseEventsHaveKeyEventsFailed />
  </div>
);

export default MouseEventsHaveKeyEvents;

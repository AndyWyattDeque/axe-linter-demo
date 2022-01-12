import React from "react";

const InteractiveSupportsFocusSucceed = () => (
  <div>
    {/* <!-- Good: div with onClick attribute is hidden from screen reader --> */}
    <div aria-hidden onClick={() => void 0} />
    {/* <!-- Good: span with onClick attribute is in the tab order --> */}
    <span onClick="doSomething();" tabIndex="0" role="button">
      Click me!
    </span>
    {/* <!-- Good: span with onClick attribute may be focused programmatically --> */}
    <span onClick="doSomething();" tabIndex="-1" role="menuitem">
      Click me too!
    </span>
    {/* <!-- Good: anchor element with href is inherently focusable --> */}
    <a href="javascript:void(0);" onClick="doSomething();">
      Click ALL the things!
    </a>
    {/* <!-- Good: buttons are inherently focusable --> */}
    <button onClick="doSomething();">Click the button :)</button>
  </div>
);

const InteractiveSupportsFocusFailed = () => (
  <div>
    {/* <!-- Bad: span with onClick attribute has no tabindex --> */}
    <span onclick="submitForm();" role="button">
      Submit
    </span>
    {/* <!-- Bad: anchor element without href is not focusable --> */}
    <a onclick="showNextPage();" role="button">
      Next page
    </a>
  </div>
);

const InteractiveSupportsFocus = () => (
  <div>
    <InteractiveSupportsFocusSucceed />
    <InteractiveSupportsFocusFailed />
  </div>
);

export default InteractiveSupportsFocus;

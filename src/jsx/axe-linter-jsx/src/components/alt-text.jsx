import React from "react";

const AltTextSucceed = () => (
  <div>
    <img src="foo" alt={"Foo eating a sandwich."} />
    <img src="foo" alt={altText} />
    <img src="foo" alt={`${person} smiling`} />
    <myImg src="foo" label={`${person} smiling`} />
    <area aria-label="foo" />
    <area aria-labelledby="id1" />
    <area alt="This is descriptive!" />
    
    <mybutton></mybutton>
    <img src="foo" alt={"Foo eating a sandwich."} />
    <myImg src="foo.jpg"/>
    <myImg src="foo" label="foo"/>

  </div>
);

const AltTextFailed = () => (
  <div>
    <img src="foo" />
    <img {...props} />
    <img {...props} alt /> // Has no value
    <img {...props} alt={undefined} /> // Has no value
    <img {...props} alt={`${undefined}`} /> // Has no value
    <img src="foo" role="presentation" /> // Avoid ARIA if it can be achieved
    without
    <img src="foo" role="none" /> // Avoid ARIA if it can be achieved without
    <object {...props} />
    <area {...props} />
    <input type="image" {...props} />
  </div>
);

const AltText = () => (
  <div>
    <AltTextSucceed />
    <AltTextFailed />
  </div>
);

export default AltText;

import React from "react";

const ImgRedundantAltSucceed = () => (
  <div>
    <img src="foo" alt="Foo eating a sandwich." />
    {/*Will pass because it is hidden.*/}
    <img src="bar" aria-hidden alt="Picture of me taking a photo of an image" />
    {/*This is valid since photo is a variable name. */}
    <img src="baz" alt={`Baz taking a ${photo}`} />
  </div>
);

const ImgRedundantAltFailed = () => (
  <div>
    <img src="foo" alt="Photo of foo being weird." />
    <img src="bar" alt="Image of me at a bar!" />
    <img src="baz" alt="Picture of baz fixing a bug." />
  </div>
);

const ImgRedundantAlt = () => (
  <div>
    <ImgRedundantAltSucceed />
    <ImgRedundantAltFailed />
  </div>
);

export default ImgRedundantAlt;

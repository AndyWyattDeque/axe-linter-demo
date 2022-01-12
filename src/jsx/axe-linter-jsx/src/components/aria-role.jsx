import React from "react";

const AriaRoleSucceed = () => (
  <div>
    <div role="button"></div>
    <div role={role}></div>
    <div></div>
    <Foo role={role}></Foo>
  </div>
);

const AriaRoleFailed = () => (
  <div>
    <div role="datepicker"></div> <div role="range"></div>
    <div role=""></div> <Foo role={role}></Foo>
  </div>
);

const AriaRole = () => (
  <div>
    <AriaRoleSucceed />
    <AriaRoleFailed />
  </div>
);

export default AriaRole;

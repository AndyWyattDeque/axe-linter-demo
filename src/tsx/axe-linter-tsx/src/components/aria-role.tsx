import React from "react";

const roleType: string = 'button'

const AriaRoleSucceed: React.FC = () => (
  <div>
    <div role="button"></div>
    <div role={roleType}></div>
    <div></div>
  </div>
);

const AriaRoleFailed: React.FC = () => (
  <div>
    <div role="datepicker"></div> 
    <div role="range"></div>
    <div role=""></div>
  </div>
);

const AriaRole: React.FC = () => (
  <div>
    <AriaRoleSucceed />
    <AriaRoleFailed />
  </div>
);

export default AriaRole;

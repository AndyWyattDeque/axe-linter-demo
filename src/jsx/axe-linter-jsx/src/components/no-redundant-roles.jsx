import React from "react";

const NoRedundantRolesSucceed = () => (
  <div>
    <div />
    <button role="presentation" />
    <MyComponent role="main" />
  </div>
);

const NoRedundantRolesFailed = () => (
  <div>
    <button role="button" />
    <img role="img" src="foo.jpg" />
  </div>
);

const NoRedundantRoles = () => (
  <div>
    <NoRedundantRolesSucceed />
    <NoRedundantRolesFailed />
  </div>
);

export default NoRedundantRoles;

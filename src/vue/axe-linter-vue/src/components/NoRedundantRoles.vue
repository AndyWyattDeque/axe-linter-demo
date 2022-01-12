<template>
  <div>
    <div class="NoRedunantRolesSucceed">
      <div />
      <button role="presentation" />
    </div>
    <div class="NoRedunantRolesFailed">
      <button role="button" />
      <img role="img" src="foo.jpg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoRedunantRoles"
}
</script>
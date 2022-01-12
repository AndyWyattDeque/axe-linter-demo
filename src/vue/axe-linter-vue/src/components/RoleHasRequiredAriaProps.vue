<template>
  <div>
    <div class="RoleHasRequiredAriaPropsSucceed">
      <span role="checkbox" aria-checked="false" aria-labelledby="foo" tabindex="0"></span>
    </div>
    <div class="RoleHasRequiredAriaPropsFailed">
      <span role="checkbox" aria-labelledby="foo" tabindex="0"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoleHasRequiredAriaProps"
}
</script>
<template>
  <div>
    <div class="NoAutoFocusSucceed">
      <div />
    </div>
    <div class="NoAutoFocusFailed">
      <input autofocus="autofocus" />
      <div autoFocus />
      <div autoFocus="true" />
      <div autoFocus="false" />
      <div autoFocus={undefined} />
    </div>
  </div>
</template>

<script>
export default {
  name: "NoAutoFocus"
}
</script>
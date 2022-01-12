<template>
  <div>
    <div class="TabindexNoPositiveSucceed">
      <span tabindex="0">foo</span>
      <span tabindex="-1">bar</span>
      <span tabIndex={0}>baz</span>
    </div>
    <div class="TabindexNoPositiveFailed">
      <span tabIndex="5">foo</span>
      <span tabIndex="3">bar</span>
      <span tabIndex="1">baz</span>
      <span tabIndex="2">never really sure what goes after baz</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabindexNoPositive"
}
</script>
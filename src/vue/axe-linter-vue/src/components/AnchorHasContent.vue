<template>
  <div>
    <div class="AnchorHasContentSucceed">
      <a>Anchor Content!</a>
      <a><TextWrapper /><a>
      <a is="TextWrapper" />
      <a v-text="msg" />
      <a v-html="msg" />
    </div>
    <div class="AnchorHasContentFailed">
      <a />
      <a><TextWrapper aria-hidden /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnchorHasContent"
};
</script>
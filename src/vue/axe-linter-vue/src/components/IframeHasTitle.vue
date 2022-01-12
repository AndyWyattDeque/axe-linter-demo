<template>
  <div>
    <div class="IframeHasTitleSucceed">
      <iframe title="This is a unique title" />
      <iframe title={uniqueTitle} />
    </div>
    <div class="IframeHasTitleFailed">
      <iframe />
      <iframe title="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "IframeHasTitle",
  props: {
    uniqueTitle: String
  }
};
</script>
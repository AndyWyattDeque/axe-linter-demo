<template>
  <div>
    <div class="AriaPropsSucceed">
      <input aria-labelledby="address_label" />
    </div>
    <div class="AriaPropsFailed">
      <input aria-labeledby="address_label" /> <!-- Bad: Labeled using incorrectly spelled aria-labeledby -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AriaProps"
};
</script>
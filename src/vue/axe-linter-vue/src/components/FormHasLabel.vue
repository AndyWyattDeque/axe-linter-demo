<template>
  <div>
    <div class="FormHasLabelSucceed">
      <label><input type="text" /></label>
      <input aria-label="test"  type="text" />
      <input aria-labelledby="#id"  type="text" />
      <label for="id"></label><input aria-labelledby="#id" id="id"/>
      <input type="image" />
    </div>
    <div class="FormHasLabelFailed">
      <input value="1" type="text" />
      <textarea value="ad"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormHasLabel"
}
</script>
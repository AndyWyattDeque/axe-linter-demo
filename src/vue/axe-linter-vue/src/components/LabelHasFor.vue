<template>
  <div>
    <div class="LabelHasForSucceed">
      <label for="firstName">
        <input type="text" id="firstName" />
        First Name
      </label>
    </div>

    <div class="LabelHasForFailed">
      <input type="text" id="firstName" />
      <label>First Name</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "LabelHasFor"
}
</script>
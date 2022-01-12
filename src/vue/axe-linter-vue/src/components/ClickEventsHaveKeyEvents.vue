<template>
  <div>
    <div class="ClickEventsHaveKeyEventsSucceed">
      <div @click="doSth" @keydown="doSth" />
      <div @click="doSth" @keyup="doSth" />
      <div @click="doSth" @keypress="doSth" />
    </div>
    <div class="ClickEventsHaveKeyEventsFailed">
      <div @click="doSth"  />
    </div>
  </div>
</template>

<script>
export default {
  name: "ClickEventsHaveKeyEvents"
}
</script>
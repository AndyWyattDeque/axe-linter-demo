<template>
  <div>
    <div class="MouseEventsHaveKeyEventsSucceed">
      <div @mouseover="doSth" @focus="doSth"></div>
      <div @mouseout="doSth" @blur="doSth"></div>
    </div>
    <div class="MouseEventsHaveKeyEventsFailed">
      <div @mouseover="doSth"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MouseEventsHaveKeyEvents"
}
</script>
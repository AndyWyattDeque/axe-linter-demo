<template>
  <div>
    <div class="InteractiveSupportFocusSucceed">
      <!-- Good: span with @click attribute is in the tab order -->
      <span @click="doSomething();" tabindex="0" role="button">Click me!</span>
      <!-- Good: span with @click attribute may be focused programmatically -->
      <span @click="doSomething();" tabindex="-1" role="menuitem">Click me too!</span>
      <!-- Good: anchor element with href is inherently focusable -->
      <a href="javascript:void(0);" @click="doSomething();">Click ALL the things!</a>
      <!-- Good: buttons are inherently focusable -->
      <button @click="doSomething();">Click the button</button>
    </div>
    <div class="InteractiveSupportFocusFailed">
      <!-- Bad: span with @click attribute has no tabindex -->
      <span @click="submitForm();" role="button">Submit</span>
      <!-- Bad: anchor element without href is not focusable -->
      <a @click="showNextPage();" role="button">Next page</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "InteractiveSupportsFocus"
}
</script>
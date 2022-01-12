<template>
  <div>
    <div class="AriaRoleSucceed">
      <div role="button"></div>     <!-- Good: "button" is a valid ARIA role -->
      <div :role="role"></div>       <!-- Good: role is a variable & cannot be determined until runtime. -->
      <div></div>                   <!-- Good: No ARIA role -->
      <Foo role={role}></Foo>       <!-- Good: ignoreNonDOM is set to true -->
    </div>
    <div class="AriaRoleFailed">
      <div role="datepicker"></div> <!-- Bad: "datepicker" is not an ARIA role -->
      <div role="range"></div>      <!-- Bad: "range" is an _abstract_ ARIA role -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AriaRole",
  props: {
    role: String
  }
};
</script>
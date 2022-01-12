<template>
  <div>
    <div class="NoOnChangeSucceed">
      <select onBlur={updateModel}>
        <option/>
      </select>

      <select @blur="updateModel">
        <option/>
      </select>

      <select>
        <option onBlur={handleOnBlur} onChange={handleOnChange} />
      </select>
    </div>
    <div class="NoOnChangeFailed">
      <select onChange={updateModel} />
    </div>
  </div>
</template>

<script>
export default {
  name: "NoOnChange"
}
</script>
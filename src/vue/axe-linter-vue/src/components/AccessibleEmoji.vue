<template>
  <div>
    <div class="AccessibleEmojiSucceed">
      <span role="img" aria-label="Snowman">&#9731;</span>
      <span role="img" aria-label="Panda">🐼</span>
      <span role="img" aria-labelledby="panda1">🐼</span>
    </div>
    <div class="AccessibleEmojiFailed">
      <span>🐼</span>
      <i role="img" aria-label="Panda">🐼</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccessibleEmoji"
};
</script>
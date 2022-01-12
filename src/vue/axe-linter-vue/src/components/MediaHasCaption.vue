<template>
  <div>
    <div class="MediaHasCaptionSucceed">
      <audio><track kind="captions" /></audio>
      <video><track kind="captions" /></video>
      <video muted ></video>
    </div>
    <div class="MediaHasCaptionFailed">
      <audio />
      <video />
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaHasCaption"
}
</script>
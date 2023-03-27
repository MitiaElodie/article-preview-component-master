<template>
  <div class="share">
    <span class="share__text">SHARE</span>
    <img class="share__icon" src="@/assets/icon-facebook.svg" alt="Facebook icon" />
    <img class="share__icon" src="@/assets/icon-twitter.svg" alt="Twitter icon" />
    <img class="share__icon" src="@/assets/icon-pinterest.svg" alt="Pinterest icon" />
  </div>
</template>

<script>
export default {
  name: 'Share',
}
</script>

<style lang="scss">
$margin-value: 10px;
.share {
  background-color: hsl(217, 19%, 35%);
  display: flex;
  align-items: center;
  gap: 15px;

  &__text {
    letter-spacing: 2px;
    color: hsl(212, 23%, 69%);
  }
}
</style>
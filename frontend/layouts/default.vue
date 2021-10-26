<template>
  <div class="page-wrapper">
    <div class="page-container">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
@import 'css-wipe';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page-container {
  background: $background_gray;
  max-width: 390px;
  width: 100%;
  height: 100%;
  padding: 0 30px;
}
</style>

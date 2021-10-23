<template>
  <div class="formQuestion-container">
    <h3 class="formQuestion-text">{{ question }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.formQuestion {
  &-text {
    color: $color_black;
    font-size: 12px;
    font-weight: bold;
  }
}
</style>
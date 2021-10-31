<template>
  <div class="formHeading-container">
    <h2 class="formHeading-text">{{ heading }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.formHeading {
  &-container {
    display: flex;
    justify-content: center;
  }

  &-text {
    color: $color_black;
    font-weight: 600;
    font-size: 18px;
  }
}
</style>
<template>
  <div class="label-container">
    <span class="label-title">{{ labelName }}</span>
  </div>
</template>

<script>
export default {
  props: {
    labelName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  &-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 20px;
    border-radius: 15px;
    background: $color_green;
    color: $color_white;
    font-size: 12px;
    font-weight: bold;
  }
}
</style>

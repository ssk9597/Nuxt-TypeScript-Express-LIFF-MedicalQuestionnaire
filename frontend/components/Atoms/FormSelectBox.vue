<template>
  <div>
    <div class="selectBox-wrapper">
      <select class="selectBox-container" @change="$emit('input', $event.target.value)">
        <option v-for="(option, index) in options" :key="index" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.selectBox {
  &-wrapper {
    position: relative;
    max-width: 330px;
    width: 100%;

    &:before {
      z-index: 100;
      position: absolute;
      top: 0;
      right: 15px;
      content: '\f078';
      font-weight: 900;
      font-family: 'Font Awesome 5 Free';
      line-height: 50px;
      color: $color_white;
      pointer-events: none;
    }
  }
  &-container {
    z-index: 1;
    appearance: none;
    width: 100%;
    height: 50px;
    background: $color_green;
    color: $color_white;
    border: none;
    padding: 0px 10px;
    font-size: 15px;

    &:focus {
      outline: none;
    }
  }
}
</style>

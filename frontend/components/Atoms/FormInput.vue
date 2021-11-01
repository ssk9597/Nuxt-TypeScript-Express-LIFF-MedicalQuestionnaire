<template>
  <div>
    <input
      class="form-input"
      :type="type"
      :inputmode="inputmode"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    inputmode: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  display: block;
  width: 100%;
  padding: 10px 10px;
  color: $color_black;
  border: solid 1px $background_gray;
  border-radius: 6px;
  outline: 0;
  transition: 0.3s;
  font-size: 16px;

  &:focus {
    border: 1px solid $color_green;
  }
}
</style>

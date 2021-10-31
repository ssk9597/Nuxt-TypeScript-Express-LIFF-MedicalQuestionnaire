<template>
  <div>
    <textarea
      class="form-textarea"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.form-textarea {
  display: block;
  width: 100%;
  height: 100px;
  padding: 10px 10px;
  margin: 10px 0;
  color: $color_black;
  border: solid 1px $background_gray;
  border-radius: 6px;
  outline: 0;
  transition: 0.3s;
  resize: none;

  &:focus {
    border: 1px solid $color_green;
  }
}
</style>
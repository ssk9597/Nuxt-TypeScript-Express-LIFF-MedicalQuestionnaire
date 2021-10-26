<template>
  <div class="formButton-container">
    <button
      class="formButton-button"
      :style="{
        backgroundColor: backgroundColor,
        fontSize: fontSize,
        maxWidth: maxWidth,
      }"
      @click="grandChildClick"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: '#CE6752',
    },
    fontSize: {
      type: String,
      default: '24px',
    },
    maxWidth: {
      type: String,
      default: '250px',
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
  methods: {
    grandChildClick() {
      this.$emit('childClick');
    },
  },
};
</script>

<style lang="scss" scoped>
.formButton {
  &-container {
    display: flex;
    justify-content: center;
  }

  &-button {
    cursor: pointer;
    width: 100%;
    padding: 8px 0;
    font-weight: bold;
    color: $color_white;
    text-decoration: none;
    user-select: none;
    border: 1px $color_white solid;
    border-radius: 15px;
    transition: 0.4s ease;

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>

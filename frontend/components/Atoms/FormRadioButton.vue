<template>
  <div class="radio-container">
    <div class="radio-wrapper" v-for="(option, index) in options" :key="index">
      <input
        class="radio-wrapper-input"
        type="radio"
        v-model="chooseVal"
        :value="option"
        :id="option"
        @change="$emit('input', $event.target.value)"
      />
      <label
        class="radio-wrapper-label"
        :for="option"
        :class="[option === chooseVal ? 'checked' : '']"
        :style="{ width: width }"
      >
        {{ option }}
      </label>
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
    default: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '120px',
    },
  },
  data() {
    return {
      chooseVal: this.default,
    };
  },
};
</script>

<style lang="scss" scoped>
.radio {
  &-container {
    display: flex;
    justify-content: space-around;
  }

  &-wrapper {
    &-input {
      display: none;
    }

    &-label {
      display: flex;
      justify-content: center;
      align-items: center;
      // width: 100px;
      height: 35px;
      border-radius: 15px;
      background: $color_white;
      color: $color_green;
      border: 1px $color_green solid;
    }
  }
}

.checked {
  background: $color_green;
  color: $color_white;
  border: none;
}
</style>

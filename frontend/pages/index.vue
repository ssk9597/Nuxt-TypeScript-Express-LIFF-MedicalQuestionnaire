<template>
  <div>
    <Form @clickAddress="test" @clickRegister="test" />
  </div>
</template>

<script>
// components
import Form from '@/components/Organisms/Form';

export default {
  components: {
    Form,
  },
  async mounted() {
    await liff.init({
      liffId: process.env.LIFF_ID,
    });
  },
  methods: {
    test() {
      alert('OK');
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template></template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api';
import liff from '@line/liff';

export default defineComponent({
  setup() {
    // data
    const liffId = ref<string | undefined>(process.env.LIFF_ID || '');

    onMounted(async () => {
      if (liffId === undefined) {
        return;
      } else {
        await liff.init({
          liffId: liffId,
        });
      }
    });

    return {
      liffId,
    };
  },
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

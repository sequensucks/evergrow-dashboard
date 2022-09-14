<template>
  <iframe :src="frameSrc"></iframe>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'ChartFrame',
  props: {
    chartHash: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const baseUrl = 'https://docs.google.com/spreadsheets/d/1JWIyBbaqaWrsM4KB8xyv-tXH-hN1LrysMkrJq5kTdgc/edit';
    const frameSrc = computed(() => baseUrl + `?rm=minimal#gid=` + props.chartHash);

    return {
      frameSrc,
    };
  },
});
</script>

<style scoped>
  iframe {
    @apply w-full h-full;
  }
</style>

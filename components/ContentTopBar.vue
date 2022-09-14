<template>
  <div class="top-bar">
    <h2 class="content-title">
      {{ contentTitle }}
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'ContentTopBar',
  props: {
    contentTitle: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
  .top-bar {
    @apply sticky top-0 z-1 bg-concrete pt-4 pb-6;
  }

  .content-title {
    @apply text-xl font-bold;
  }
</style>

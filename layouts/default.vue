<template>
  <div
    id="layout"
    class="flex min-h-screen"
  >
    <sidebar class="sidebar" />
    <div class="content">
      <nuxt :key="route.fullPath" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRoute } from '@nuxtjs/composition-api';
import Sidebar from '~/components/Sidebar/Sidebar.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Sidebar,
  },
  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
});
</script>

<style scoped>
.sidebar {
  @apply bg-lochinvar shrink-0 basis-[210px];
}

.content {
  @apply bg-concrete w-full pr-5 pb-5 pl-5 overflow-scroll;
}
</style>

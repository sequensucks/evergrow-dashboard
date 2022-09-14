<template>
  <div>
    <router-link class="sidebar-header" to="/">Evergrow</router-link>
    <span class="divider"></span>
    <nav-menu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import NavMenu from "~/components/Sidebar/NavMenu.vue";

export default defineComponent({
  name: 'ContentTopBar',
  components: {
    NavMenu,
  },
});
</script>

<style scoped>
  .sidebar-header {
    @apply block mt-6 mr-auto mb-4 ml-6 text-white text-3xl;
  }

  .divider {
    @apply block opacity-10 h-px bg-mercury mx-4;
  }
</style>

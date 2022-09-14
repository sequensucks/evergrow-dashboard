<template>
  <nav class="nav-menu">
    <nav-link
      v-for="{ name, icon, to, id } in nav"
      :id="id"
      :key="name"
      :icon-url="icon"
      :name="name"
      :to="to"
    />
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import type { NavInterface } from '~/types';

import NavLink from '~/components/Sidebar/NavLink.vue';

export default defineComponent({
  name: 'NavMenu',
  components: {
    NavLink,
  },
  setup() {
    const nav = ref<NavInterface>([
      {
        id: 'dashboard',
        icon: '/images/views-icons/dashboard.svg',
        name: 'Dashboard',
        to: '/dashboard',
      },
      {
        id: 'markets',
        icon: '/images/views-icons/markets.svg',
        name: 'Markets',
        to: '/markets',
      },
      {
        id: 'scenarios',
        icon: '/images/views-icons/scenarios.svg',
        name: 'Scenarios',
        to: '/scenarios',
      },
      {
        id: 'assets',
        icon: '/images/views-icons/assets.svg',
        name: 'Assets',
        to: '/assets',
      },
      {
        id: 'positions',
        icon: '/images/views-icons/positions.svg',
        name: 'Positions',
        to: '/positions',
      },
      {
        id: 'compliance',
        icon: '/images/views-icons/compliance.svg',
        name: 'Compliance',
        to: '/compliance',
      },
      {
        id: 'reports',
        icon: '/images/views-icons/reports.svg',
        name: 'Reports',
        to: '/reports',
      }
    ]);

    return {
      nav,
    };
  },
});
</script>

<style scoped>
  .nav-menu {
    @apply w-full text-base;
  }
</style>

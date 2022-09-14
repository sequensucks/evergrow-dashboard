<template>
  <div
    class="nav-item"
    :class="{'active': idFromRoute === id }"
  >
    <img
      v-if="iconUrl"
      :src="iconUrl"
      :alt="name"
    >
    <router-link :to="to">{{ name }}</router-link>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, useRoute} from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'NavLink',
  props: {
    id: {
      type: String,
      required: true,
    },
    iconUrl: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup() {
    const route = useRoute();

    const idFromRoute = computed(() => route.value.name);

    return {
      idFromRoute,
    };
  },
});
</script>

<style scoped>
  .nav-item {
    @apply transition-all overflow-hidden relative items-center flex rounded-lg mt-1 mr-3 mb-0 ml-3 py-2 pr-3 pl-0;
  }

  .nav-item:hover,
  .nav-item.active {
    @apply bg-eden;
  }

  .nav-item a {
    @apply flex w-full h-full absolute text-white items-center pl-12;
  }

  .nav-item a.router-link-exact-active {
    @apply bg-eden;
  }

  img {
    @apply z-1 w-6 h-6 ml-3;
  }
</style>

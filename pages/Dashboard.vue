<template>
  <div class="dashboard">
    <content-title content-title="Dashboard" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import ContentTitle from '~/components/ContentTopBar.vue';

export default defineComponent({
  name: 'DashboardPage',
  components: {
    ContentTitle,
  },
});
</script>

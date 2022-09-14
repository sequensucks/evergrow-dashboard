<template>
  <div class="reports">
    <content-title content-title="Reports" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import ContentTitle from '~/components/ContentTopBar.vue';

export default defineComponent({
  name: 'ReportsPage',
  components: {
    ContentTitle,
  },
});
</script>

<template>
  <div class="compliance">
    <content-title content-title="Compliance" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import ContentTitle from '~/components/ContentTopBar.vue';

export default defineComponent({
  name: 'CompliancePage',
  components: {
    ContentTitle,
  },
});
</script>

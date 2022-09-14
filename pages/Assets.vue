<template>
  <div class="assets">
    <content-title content-title="Assets" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import ContentTitle from '~/components/ContentTopBar.vue';

export default defineComponent({
  name: 'AssetsPage',
  components: {
    ContentTitle,
  },
});
</script>

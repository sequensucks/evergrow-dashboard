<template>
  <div class="positions">
    <content-title content-title="Positions" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import ContentTitle from '~/components/ContentTopBar.vue';

export default defineComponent({
  name: 'PositionsPage',
  components: {
    ContentTitle,
  },
});
</script>

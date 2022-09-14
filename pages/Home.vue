<template>
  <div class="home">
    <content-title content-title="Home" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import ContentTitle from '~/components/ContentTopBar.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    ContentTitle,
  },
});
</script>

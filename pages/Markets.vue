<template>
  <div class="h-full flex flex-col">
    <content-title content-title="Markets" />
    <tabs
      :tabs="tabs"
      initial-tab-id="home"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { marketsChartsHashes } from '~/mocks/data';
import type { TabsInterface } from '~/types';

import ContentTitle from '~/components/ContentTopBar.vue';
import Tabs from '~/components/Tabs.vue';

export default defineComponent({
  name: 'MarketsPage',
  components: {
    Tabs,
    ContentTitle,
  },
  setup() {
    const tabs = ref<TabsInterface>([
      {
        id: 'home',
        title: 'Home',
        hash: marketsChartsHashes.home,
      },
      {
        id: 'carbon',
        title: 'Carbon',
        hash: marketsChartsHashes.carbon,
      },
      {
        id: 'feedstocks',
        title: 'Feedstocks',
        hash: marketsChartsHashes.feedstocks,
      },
      {
        id: 'outputs',
        title: 'Output',
        hash: marketsChartsHashes.outputs,
      },
    ]);

    return {
      tabs,
    };
  },
});
</script>

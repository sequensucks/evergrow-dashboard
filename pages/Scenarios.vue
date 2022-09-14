<template>
  <div class="h-full flex flex-col">
    <content-title content-title="Scenarios" />
    <tabs
      :tabs="tabs"
      initial-tab-id="price_forecasts"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { scenariosChartsHashes } from '~/mocks/data';
import type { TabsInterface } from '~/types';

import ContentTitle from '~/components/ContentTopBar.vue';
import Tabs from '~/components/Tabs.vue';

export default defineComponent({
  name: 'ScenariosPage',
  components: {
    ContentTitle,
    Tabs,
  },
  setup() {
    const tabs = ref<TabsInterface>([
      {
        id: 'price_forecasts',
        title: 'Price forecasts',
        hash: scenariosChartsHashes.priceForecasts,
      },
      {
        id: 'key_drivers',
        title: 'Key drivers',
        hash: scenariosChartsHashes.keyDrivers,
      },
      {
        id: 'assumptions',
        title: 'Assumptions',
        hash: scenariosChartsHashes.assumptions,
      },
      {
        id: 'news_and_research',
        title: 'News and Research',
        hash: scenariosChartsHashes.priceForecasts,
      },
    ]);

    return {
      tabs,
    };
  },
});
</script>

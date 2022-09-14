<template>
  <div class="flex flex-1 flex-col">
    <div class="tab-buttons-group">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['tab-button', {'active': currentTab === tab.id }]"
        @click="setCurrentTab(tab.id)"
      >
        {{ tab.title }}
      </button>
    </div>
    <div
      v-if="currentTabHash"
      class="active-tab flex-1"
    >
      <chart-frame :chart-hash="currentTabHash" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  PropType,
} from '@nuxtjs/composition-api';
import type { TabsInterface } from '~/types';

import ChartFrame from '~/components/ChartFrame.vue';

export default defineComponent({
  name: 'Tabs',
  components: {
    ChartFrame,
  },
  props: {
    tabs: {
      type: Array as PropType<TabsInterface>,
      required: true,
    },
    initialTabId: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const currentTab = ref(props.initialTabId);

    const currentTabHash = computed(() => props.tabs.filter((tab) => tab.id === currentTab.value)?.[0]?.hash);

    const setCurrentTab = (tab: string): void => {
      currentTab.value = tab;
    };

    return {
      currentTab,
      currentTabHash,
      setCurrentTab,
    };
  },
});
</script>

<style scoped>
  .tab-button {
    @apply bg-concrete text-dusty-gray text-base cursor-pointer transition-all py-2 px-4;
  }

  .tab-button:hover {
    @apply bg-alto;
  }

  .tab-button.active {
    @apply bg-white text-black -ml-px;
  }

  .tab-button.active:before {
    @apply content-[''] absolute left-0 top-0 w-full bg-green h-0.5 rounded-t-[3px];
  }

  .tab-button:not(:last-child):after {
    @apply content-[''] absolute right-0 top-1/2 translate-y-1/2 bg-silver z-0 w-px h-6;
  }

  .tab-button.active:after {
    @apply hidden;
  }

  .active-tab {
    @apply h-full bg-white p-4 -ml-px;
  }
</style>

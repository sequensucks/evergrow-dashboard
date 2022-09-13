<script setup>
import Tabs from "../../global/Tabs.vue";
import ContentTitle from "../../global/ContentTopBar.vue";

import HomeTab from "./Tabs/Home.vue";
import CarbonTab from "./Tabs/Carbon.vue";
import FeedstocksTab from "./Tabs/Feedstocks.vue";
import OutputTab from "./Tabs/Output.vue";

const tabs = {
  Home: HomeTab,
  Carbon: CarbonTab,
  Feedstocks: FeedstocksTab,
  Output: OutputTab,
}
</script>

<template>
  <div>
    <ContentTitle contentTitle="Markets"/>
    <Tabs :tabs="tabs" initialTab="Home"/>
  </div>
</template>

<style scoped>

</style>
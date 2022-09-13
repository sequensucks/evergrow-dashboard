<script setup>
import Tabs from "../../global/Tabs.vue";
import ContentTitle from "../../global/ContentTopBar.vue";

import PriceForecasts from "./Tabs/PriceForecasts.vue";
import KeyDrivers from "./Tabs/KeyDrivers.vue";
import Assumptions from "./Tabs/Assumptions.vue";
import NewsAndResearch from "./Tabs/NewsAndResearch.vue";

const tabs = {
  ['Price forecasts']: PriceForecasts,
  ['Key drivers']: KeyDrivers,
  ['Assumptions']: Assumptions,
  ['News and Research']: NewsAndResearch,
}
</script>

<template>
  <div>
    <ContentTitle contentTitle="Scenarios"/>
    <Tabs :tabs="tabs" initialTab="Price forecasts"/>
  </div>
</template>

<style scoped>

</style>
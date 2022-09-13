<script setup>
import Iframe from "../../../global/ChartFrame.vue";
import {marketsChartsHashes} from "../../../../data";
</script>

<template>
  <div>
    <Iframe :chartHash="marketsChartsHashes.feedstocks"/>
  </div>
</template>

<style scoped>

</style>
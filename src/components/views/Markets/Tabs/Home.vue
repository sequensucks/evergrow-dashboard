<script setup>
import Iframe from "../../../global/ChartFrame.vue";
import {marketsChartsHashes} from "../../../../data";
</script>

<template>
  <div>
    <Iframe :chartHash="marketsChartsHashes.home"/>
  </div>
</template>

<style scoped>

</style>
<script setup>
import Iframe from "../../../global/ChartFrame.vue";
import {scenariosChartsHashes} from "../../../../data";
</script>

<template>
  <div>
    <Iframe :chartHash="scenariosChartsHashes.newsAndResearch"/>
  </div>
</template>

<style scoped>

</style>
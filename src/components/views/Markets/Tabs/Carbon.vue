<script setup>
import Iframe from "../../../global/ChartFrame.vue";
import {marketsChartsHashes} from "../../../../data";
</script>

<template>
  <div>
    <Iframe :chartHash="marketsChartsHashes.carbon"/>
  </div>
</template>

<style scoped>

</style>
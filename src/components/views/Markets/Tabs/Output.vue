<script setup>
import Iframe from "../../../global/ChartFrame.vue";
import {marketsChartsHashes} from "../../../../data";
</script>

<template>
  <div>
    <Iframe :chartHash="marketsChartsHashes.outputs"/>
  </div>
</template>

<style scoped>

</style>
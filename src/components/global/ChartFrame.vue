<script setup>
const {chartHash} = defineProps({
  chartHash: String,
})

const baseUrl = 'https://docs.google.com/spreadsheets/d/1JWIyBbaqaWrsM4KB8xyv-tXH-hN1LrysMkrJq5kTdgc/edit';
const frameSrc = baseUrl + `?rm=minimal#gid=` + chartHash
</script>

<template>
  <iframe :src="frameSrc"></iframe>
</template>

<style scoped>
  iframe {
    height: 100%;
    width: 100%;
  }
</style>
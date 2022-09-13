<script setup>
defineProps({
  contentTitle: String
})
</script>

<template>
  <div class="top-bar">
    <h2 class="content-title">
      {{ contentTitle }}
    </h2>
  </div>
</template>

<style scoped>
  .top-bar {
    padding: 1rem 0 1.5rem;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: var(--content-bg);
  }

  .content-title {
    font-size: 22px;
    line-height: 26px;
    font-weight: 700;
  }
</style>
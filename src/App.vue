<script setup>
import { RouterView as PageView } from 'vue-router'
import Sidebar from "./components/Sidebar/Sidebar.vue";
</script>

<template>
  <Sidebar class="sidebar"/>
  <PageView class="content"/>
</template>

<style scoped>
  .sidebar {
    flex-basis: 210px;
    flex-shrink: 0;
    background-color: var(--main-color);
  }

  .content {
    width: 100%;
    background-color: var(--content-bg);
    padding: 0 20px 20px 20px;
    overflow: scroll;
  }
</style>

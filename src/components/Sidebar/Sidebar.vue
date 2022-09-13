<script setup>
import { RouterLink } from 'vue-router'
import NavMenu from "./NavMenu.vue";
</script>

<template>
  <div>
    <RouterLink class="sidebar-header" to="/">Evergrow</RouterLink>
    <span class="divider"></span>
    <NavMenu/>
  </div>
</template>


<style scoped>
  .sidebar-header {
    display: block;
    margin: 1.5rem auto 1rem 1.5rem;
    color: white;
    font-size: 30px;
    line-height: 24px;
  }

  .divider {
    display: block;
    opacity: .1;
    height: 1px;
    background-color: #e7e7e7;
    margin: 0 1rem;
  }
</style>
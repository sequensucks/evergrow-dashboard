<script setup>
defineProps({
  iconUrl: String,
  to: String,
  name: String,
})
</script>

<template>
  <div class="nav-item">
    <img :src="iconUrl" :alt="name">
    <RouterLink :to="to">{{ name }}</RouterLink>
  </div>
</template>

<style scoped>
  .nav-item {
    margin: 4px 0.75rem 0 0.75rem;
    padding: 0.5rem 0.75rem 0.5rem 0;
    display: flex;
    align-items: center;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    transition: .3s;
  }

  .nav-item:hover {
    background-color: #125161;
  }

  .nav-item a {
    display: flex;
    align-items: center;
    color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    padding-left: 3rem;
  }

  .nav-item a.router-link-exact-active {
    background-color: #125161;
  }

  img {
    width: 24px;
    height: 24px;
    margin-left: 0.75rem;
    z-index: 1;
  }
</style>
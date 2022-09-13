<script setup>
import {ref} from 'vue'

const {tabs, initialTab} = defineProps(['tabs', 'initialTab'])
const currentTab = ref(initialTab)
</script>

<template>
  <div class="tab-buttons-group">
    <button
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
    >
      {{ tab }}
    </button>
  </div>
  <component :is="tabs[currentTab]" class="active-tab"></component>
</template>

<style>
  .tab-button {
    padding: 0.5rem 1rem;
    color: #959595;
    background-color: var(--content-bg);
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    transition: 0.3s;
  }

  .tab-button:hover {
    background: #e0e0e0;
  }

  .tab-button.active {
    background-color: white;
    color: black;
    margin-left: -1px;
  }

  .tab-button.active:before {
    content: "";
    position: absolute;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    left: 0;
    top: 0;
    height: 2px;
    width: 100%;
    background-color: green;
  }

  .tab-button:not(:last-child):after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 24px;
    background-color: #cdcdcd;
    z-index: 0;
  }

  .tab-button.active:after {
    display: none;
  }

  .active-tab {
    height: 100%;
    background-color: white;
    padding: 1rem;
    margin-left: -1px;
  }
</style>
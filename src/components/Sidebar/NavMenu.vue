<script setup>
import NavLink from "./NavLink.vue";

import DashboardIcon from '@images/views-icons/dashboard.svg'
import MarketsIcon from '@images/views-icons/markets.svg'
import ScenariosIcon from '@images/views-icons/scenarios.svg'
import AssetsIcon from '@images/views-icons/assets.svg'
import PositionsIcon from '@images/views-icons/positions.svg'
import ComplianceIcon from '@images/views-icons/compliance.svg'
import ReportsIcon from '@images/views-icons/reports.svg'
</script>

<template>
  <nav class="nav-menu">
    <NavLink :icon-url="DashboardIcon" name="Dashboard" to="/dashboard"/>
    <NavLink :icon-url="MarketsIcon" name="Markets" to="/markets"/>
    <NavLink :icon-url="ScenariosIcon" name="Scenarios" to="/scenarios"/>
    <NavLink :icon-url="AssetsIcon" name="Assets" to="/assets"/>
    <NavLink :icon-url="PositionsIcon" name="Positions" to="/positions"/>
    <NavLink :icon-url="ComplianceIcon" name="Compliance" to="/compliance"/>
    <NavLink :icon-url="ReportsIcon" name="Reports" to="/reports"/>
  </nav>
</template>

<style scoped>
  .nav-menu {
    width: 100%;
    font-size: 1rem;
  }
</style>
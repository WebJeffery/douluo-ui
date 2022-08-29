
<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <app-main class="app-main" />
  </div>
</template>

<script>
import { AppMain, Sidebar } from './components'


export default {
  name: 'Layout',

  components: {
    AppMain,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  .sidebar-container {
    position: fixed;
  }

  .app-main {
    width: 100%;
    padding: 20px;
    margin-left: 150px;
  }
}
</style>

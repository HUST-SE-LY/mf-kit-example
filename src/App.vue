<template>
  <div class="main-layout">
    <div class="menu">
      <router-link class="link" to="/">home</router-link>
      <router-link class="link" to="/app1">app1</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
  
<script setup lang="ts">

</script>
  
<style scoped>
.main-layout {
  width: 100vw;
  height: 100vh;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.8);
}

.link {
  width: 280px;
  height: 32px;
  border-radius: 999px;
  line-height: 32px;
  text-align: center;
  color: white;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: block;
}
</style>
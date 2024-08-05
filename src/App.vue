<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue"
import Title from "./components/Title.vue"
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://playwright.dev" target="_blank">
      <img src="./assets/playwright-logo.svg" class="logo playwright" alt="Playwright logo" />
    </a>
  </div>
  <Title msg="Jeff's Vite + Vue + Playwright"></Title>
  <HelloWorld></HelloWorld>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.playwright:hover {
  filter: drop-shadow(0 0 2em #af2437aa);
}
</style>

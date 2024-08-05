<script setup lang="ts">
import { ref } from "vue"

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      <img src="../assets/up-arrow.png" class="arrow" />
    </p>
    <p>
      Click that button to increase the count.
    </p>
  </div>

  <p>
    Check out the
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >quick start</a
    > for the official Vue + Vite starter kit. That's how I started this project.
  </p>
  <p>
    I recommend Visual Studio Code and you can see the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >IDE Support for Vue</a
    > for some details.
  </p>
  <p>
    This project will recommend you install the extension if you load it up in Visual Studio Code.
  </p>
  <p class="read-the-docs">Click on the Vite, Vue and Playwright logos to learn more!</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.arrow {
  vertical-align:middle;
}
</style>

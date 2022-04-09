<script lang="ts" setup>
import Aside from "@/components/Aside.vue";
import Layout from "../components/Layout.vue";
</script>
<template>
  <main>
    <Aside />
    <Layout />
  </main>
</template>

<style scoped>
main {
  display: flex;
  min-height: 100vh;
}
</style>

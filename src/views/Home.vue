<script lang="ts" setup>
import { HButton } from "@/lib";
import { useRouter } from "vue-router";

const router = useRouter();

const start = () => {
  router.push("/comp");
};
</script>

<template>
  <main>
    <HButton @click="start">start</HButton>
  </main>
</template>

<style scoped>
main {
  display: flex;
  min-height: 100vh;
  width: 100%;
}
main > button {
  margin: auto;
}
</style>

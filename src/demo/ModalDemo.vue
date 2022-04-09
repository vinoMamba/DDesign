<script lang="ts" setup>
import { ref } from "vue";
import { HButton, HModal } from "@/lib";
const visible = ref(true);
const toggle = () => {
  visible.value = !visible.value;
};
</script>
<template>
  <HButton @click="toggle">open</HButton>
  <HModal :visible="visible">
    <template #title>
      <h1>title</h1>
    </template>
    <template #content>
      <p>content</p>
      <p>content</p>
      <p>content</p>
      <p>content</p>
    </template>
  </HModal>
</template>
<style scoped>
h1 {
  color: black;
}
</style>

<script lang="ts" setup>
import { HButton } from "@/lib";
const click = () => {
  console.log("click");
};
</script>
<template>
  <div>
    <HButton type="primary" @click="click">primary</HButton>
    <HButton>default</HButton>
    <HButton type="danger">danger</HButton>
  </div>
</template>
<style scoped>
div > button {
  margin-right: 8px;
  margin-bottom: 12px;
}
</style>

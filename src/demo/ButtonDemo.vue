<script lang="ts" setup>
import { HButton } from "@/lib";
</script>
<template>
  <div>
    <HButton type="primary">primary</HButton>
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

<script lang="ts" setup>
import { HUserTree, HButton } from "@/lib";
import { ref } from "vue";

const visible = ref(true);
const toggle = () => {
  visible.value = !visible.value;
};
</script>
<template>
  <div>
    <HButton @click="toggle">open</HButton>
    <HUserTree v-model:visible="visible" :multiple="false" />
  </div>
</template>

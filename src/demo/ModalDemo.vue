<script lang="ts" setup>
import { ref } from "vue";
import { HButton, HModal } from "@/lib";
const visible = ref(true);
const toggle = () => {
  console.log("toggle");
  visible.value = !visible.value;
};
const handleOk = (e: MouseEvent) => {
  console.log(e);
};
</script>
<template>
  <HButton @click="toggle">open</HButton>
  <HModal v-model:visible="visible" @ok="handleOk">
    <template #content>
      <div class="wrapper">
        <div>1</div>
        <div>2</div>
      </div>
    </template>
  </HModal>
</template>
<style scoped>
h1 {
  color: black;
}
.wrapper {
  min-width: 45vw;
  display: flex;
}
.wrapper > div {
  width: 100%;
  min-height: 50vh;
}
</style>

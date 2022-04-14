<script lang="ts" setup>
import {HUserTree, HButton} from "@/lib";
import {ref} from "vue";
import {mockTree} from "@/lib/UserTree/mock";
import type {TreeNode} from "@/lib/UserTree/type";

const visible = ref(true);
const toggle = () => {
  visible.value = !visible.value;
};
const treeData = ref<TreeNode[]>(mockTree)
</script>
<template>
  <div>
    <HButton @click="toggle">open</HButton>
    <HUserTree v-model:visible="visible" :tree-data="treeData"/>
  </div>
</template>

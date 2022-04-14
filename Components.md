## UserTree

## 基本使用

```vue

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
```

## API

| 参数                   | 说明           | 类型                   | 默认值        |
|----------------------|--------------|----------------------|------------|
| treeData             | 数据源          | TreeNode[]           | -          |
| visible              | 是否显示         | boolean              | false      |
| multiple             | 是否多选         | boolean              | true       |
| mode                 | 部门模式、部门加人员模式 | andUser / department | department |
| showUserCount        | 是否显示人员数量     | boolean              | false      |
| showAllCheckedButton | 是否显示多选按钮     | boolean              | false      |

## 事件

| 事件名称 | 说明 | 回调参数                      |
|----------|------|---------------------------|
| success  | 成功回调 | (data:TreeNode[]) => void |
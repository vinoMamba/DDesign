<template>
  {{ content }}
  <HInput v-model:value="content"/>
</template>
<script lang="ts" setup>
import {HInput} from "@/lib";
import {ref} from "vue";

const content = ref("fuck")
</script>
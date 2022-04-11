<template>
  <HInput v-model:value="content"/>
  {{ content }}
</template>
<script lang="ts" setup>
import {HInput} from "@/lib";
import {ref} from "vue";

const content = ref("")
</script>
<script lang="ts" setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

interface Nav {
  title: string;
  path: string;
}

const router = useRouter();
const navList = ref<Nav[]>([
  {title: "Button", path: "/comp/button"},
  {title: "Modal", path: "/comp/modal"},
  {title: "Breadcrumb", path: "/comp/breadcrumb"},
  {title: "Input", path: "/comp/input"},
  {title: "UserTree", path: "/comp/userTree"},
]);
const jump = (path: string) => {
  router.push(path);
};
</script>
<template>
  <aside>
    <ul>
      <li v-for="nav in navList" :key="nav.title" @click="jump(nav.path)">
        {{ nav.title }}
      </li>
    </ul>
  </aside>
</template>

<style>
aside {
  padding: 8px;
  min-width: 200px;
  border-right: 1px solid gray;
}

aside > ul {
  text-align: center;
}

aside > ul > li {
  border: 1px solid gray;
  cursor: pointer;
}
</style>

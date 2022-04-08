import { defineComponent, ref } from "vue";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoApp = defineComponent({
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        text: "Learn Vue.js 3",
        completed: false,
      },
    ]);
    return () => <div></div>;
  },
});

import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTodoStore = defineStore(
  "todo",
  () => {
    const id = ref(0);
    const todos = ref([]);

    // getters: todos의 전체 개수, 완료된 개수, 미완료 개수를 계산하는 계산 속성
    const allTodosCount = computed(() => todos.value.length); // 전체 할 일 개수
    const completedTodosCount = computed(() => todos.value.filter((todo) => todo.completed).length); // 완료된 할 일 개수
    const activeTodosCount = computed(() => todos.value.filter((todo) => !todo.completed).length); // 미완료(진행중) 할 일 개수

    const addTodo = (title) => {
      todos.value.push({ id: id.value++, title, completed: false });
    };

    const changeTodoComplete = (id) => {
      todos.value = todos.value.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    };

    const removeTodo = (id) => {
      todos.value = todos.value.filter((todo) => todo.id !== id);
    };

    return {
      id,
      todos,
      allTodosCount,
      completedTodosCount,
      activeTodosCount,
      addTodo,
      changeTodoComplete,
      removeTodo,
    };
  },
  { persist: { storage: localStorage } }
  // { persist: { storage: sessionStorage } }
);

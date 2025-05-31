<script setup>
// ref: 반응형 상태 선언
import { ref } from "vue";

// 컴포넌트 import
import TheHeading from "./components/TheHeading.vue";
import AppPropsLiteral from "./components/props/AppPropsLiteral.vue";
import AppPropsObject from "./components/props/AppPropsObject.vue";
import ComponentEmitEventTemplate from "./components/events/ComponentEmitEventTemplate.vue";
import ComponentEmitEventScriptSetup from "./components/events/ComponentEmitEventScriptSetup.vue";

// 현재 보여줄 뷰 상태
const view = ref("");
</script>

<template>
  <div class="container">
    <TheHeading />코코
    <div class="menu">
      <!-- 버튼 클릭 시 view 상태 변경 -->
      <button :class="{ active: view === 'literal' }" @click="view = 'literal'">Props Literal</button>
      <button :class="{ active: view === 'obj' }" @click="view = 'obj'">Props Object</button>
      <button :class="{ active: view === 'template' }" @click="view = 'template'">Component Events (template)</button>
      <button :class="{ active: view === 'script' }" @click="view = 'script'">Component Events (script setup)</button>
    </div>
    <!-- 조건부 렌더링으로 각 컴포넌트 표시 -->
    <AppPropsLiteral v-if="view === 'literal'" view-title="좋아하는 과일은? (단순 문자열(literal) 전달)" />
    <AppPropsObject v-if="view === 'obj'" view-title="좋아하는 과일은? (Object data 전달)" />
    <ComponentEmitEventTemplate v-if="view === 'template'" view-title="Emit Event - in template" />
    <ComponentEmitEventScriptSetup v-if="view === 'script'" view-title="Emit Event - in <script setup>" />
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}

.menu {
  margin: 0.3rem 0;
}

button {
  margin: 0.2rem;
  padding: 0.5rem;
}

.active {
  background-color: steelblue;
  color: aliceblue;
  border: 0;
  border-radius: 5px;
}
</style>
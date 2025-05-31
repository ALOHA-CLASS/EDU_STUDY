<!-- HomeView.vue
홈 화면을 표시하는 컴포넌트입니다.
작성일: 2025-05-31
작성자: ALOHA
설명: Home View의 기본 구조를 제공합니다.
-->

<script setup>
  // 메시지 상태를 관리하기 위한 ref ( ⏹️ import )
  import { ref } from 'vue'

  const msg = ref('')

</script>

<template>
  <div>
    <input type="text" v-model="msg" />
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped>
/* 이 스타일은 HomeView 컴포넌트 및 하위 컴포넌트에만 적용됩니다. */

</style>
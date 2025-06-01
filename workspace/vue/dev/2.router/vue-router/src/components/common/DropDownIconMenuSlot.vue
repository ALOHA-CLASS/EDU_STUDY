<script setup></script>

<template>
  <div>
    <!-- slot을 사용하여 아이콘과 라벨을 삽입할 수 있는 드롭다운 메뉴 -->
    <slot name="icon"></slot>
    <slot name="label"></slot>
  </div>
</template>

<style scoped></style>

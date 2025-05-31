<script setup>
import { ref } from "vue";
import ComponentEmitEventTemplateChild from "./ComponentEmitEventTemplateChild.vue";

// 부모 컴포넌트가 자식 컴포넌트의 이벤트를 받기 위한 props 정의
defineProps({
    viewTitle: String
});

const message = ref("");

// greet: greeting-event(인자 없는 이벤트) 발생 시 실행
const greet = () => {
    message.value = "지금 이 순간도 너의 성공 이야기의 한 페이지야~";
};

// greetArg: greeting-arg-event(인자 있는 이벤트) 발생 시 실행
const greetArg = (greet) => {
    message.value = greet;
};
</script>

<template>
    <div>
        <h1>{{ viewTitle }}</h1>
        <!--
          v-on:greeting-event="greet":
            자식에서 greeting-event 발생 시 greet 함수 실행
          @greeting-arg-event="greetArg":
            자식에서 greeting-arg-event 발생 시 greetArg 함수 실행
        -->
        <ComponentEmitEventTemplateChild v-on:greeting-event="greet" @greeting-arg-event="greetArg" />
        <h3>{{ message }}</h3>
    </div>
</template>

<style scoped></style>
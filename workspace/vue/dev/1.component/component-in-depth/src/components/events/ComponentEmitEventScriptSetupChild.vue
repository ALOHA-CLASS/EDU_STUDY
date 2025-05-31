<script setup>
import { ref } from "vue";

// greet: 입력값(인사말)을 저장하는 반응형 변수
const greet = ref("");

// defineEmits: 부모에게 이벤트를 전달(emit)할 때 사용하는 함수
// 아래는 payload(전달값) 유효성 검사까지 포함한 예시
const emit = defineEmits({
    // greetingEvent: 인자 없이 발생시키는 이벤트
    greetingEvent: null,
    // greetingArgEvent: 인사말이 비어있지 않은 경우에만 발생
    greetingArgEvent: (payload) => {
        if (payload.trim().length != 0) {
            return true;
        } else {
            console.warn("인사말 입력 !!!");
            return false;
        }
    },
});

// noArgGreet: 인자 없이 greetingEvent 이벤트 발생
const noArgGreet = () => {
    emit("greetingEvent");
};

// argGreet: 입력값을 인자로 greetingArgEvent 이벤트 발생
const argGreet = () => {
    emit("greetingArgEvent", greet.value);
};
</script>

<template>
    <div class="child">
        <h3>Child 영역입니다</h3>
        <div class="div-btn">
            <!-- noArgGreet: 인자 없이 이벤트 발생 -->
            <button @click="noArgGreet">인사해요</button>
        </div>
        <div class="div-btn">
            <input type="text" v-model="greet">
            <!-- argGreet: 입력값을 인자로 이벤트 발생 -->
            <button @click="argGreet">인사해요(인자전달)</button>
        </div>
    </div>
</template>

<style scoped>
.child {
    background-color: rgb(244, 210, 236);
    padding: 20px;
}

.div-btn {
    margin: 10px;
}
</style>
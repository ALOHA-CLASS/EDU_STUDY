<script setup>
import { computed } from "vue";

// defineProps: 부모 컴포넌트로부터 전달받는 props를 정의하는 함수 (Composition API 전용)
const props = defineProps({
    fruitId: String,      // 과일 ID (이미지 파일명 등으로 사용)
    fruitName: String,    // 과일 이름
    isChecked: Boolean    // 체크박스 선택 여부
});

// imgSrc: fruitId에 따라 동적으로 이미지 경로 생성
/* 
    computed: 계산된 속성. 의존하는 값(props.fruitId)이 변할 때만 다시 계산됨(캐싱됨).
*/
const imgSrc = computed(() => {
    return new URL(`../../assets/${props.fruitId}.png`, import.meta.url).href;
});
</script>

<template>
    <div class="div-fruit">
        <!-- :id, :checked, :for, :src, :alt 등은 v-bind의 축약형(:)으로, JS 표현식의 값을 해당 속성에 바인딩함 -->
        <input type="checkbox" :id="fruitId" :checked="isChecked">
        <label :for="fruitId">
            <img :src="imgSrc" class="img-fruit" :alt="fruitName">
            {{ fruitName }}
        </label>
    </div>
</template>

<style scoped>
.div-fruit {
    margin-bottom: 5px;
    font-size: large;
}

.img-fruit {
    width: 20px;
    margin: 0 1px 0 5px;
}
</style>
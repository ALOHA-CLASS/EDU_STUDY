<script setup>
import { computed } from "vue";

// const props = defineProps({
//     fruit: Object
// });

// 각 프로퍼티 를 개별적으로 정의 - String, Number, Boolean 등
const props = defineProps({
    fruit: {
        id : String,      // 과일 ID (이미지 파일명 등으로 사용)
        name: String,    // 과일 이름
        checked: Boolean, // 체크박스 선택 여부
        // 필수 프로퍼티 설정
        required: true,    // 이 프로퍼티는 필수로 전달되어야 함
        // 기본값 설정
        default: () => ({ id: '', name: '', checked: false }), // 기본값 설정
        // 유효성 검사
        validator: (value) => {
            // id는 문자열, name은 문자열, checked는 불리언이어야 함
            return typeof value.id === 'string' && typeof value.name === 'string' && typeof value.checked === 'boolean';
        }
    }
});





const imgSrc = computed(() => {
    return new URL(`../../assets/${props.fruit.id}.png`, import.meta.url).href;
});
</script>

<template>
    <div class="div-fruit">
        <input type="checkbox" :id="fruit.id" :checked="fruit.checked">
        <label :for="fruit.id">
            <img :src="imgSrc" class="img-fruit" :alt="fruit.name">
            {{ fruit.name }}
        </label>
    </div>
</template>

<style scoped>
.div-fruit {
    color: darkgray;
    margin-bottom: 5px;
    font-size: large;
}

.img-fruit {
    width: 20px;
    margin: 0 1px 0 5px;
}
</style>
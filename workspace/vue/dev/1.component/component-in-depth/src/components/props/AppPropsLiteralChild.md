# AppPropsLiteralChild.vue 설명

## 파일 위치
`src/components/props/AppPropsLiteralChild.vue`

## 핵심 개념

### 1. defineProps
- `defineProps`는 부모 컴포넌트로부터 전달받는 props(속성)를 정의하는 함수입니다.
- Composition API의 `<script setup>`에서만 사용합니다.
- 예시:
  ```js
  const props = defineProps({
    fruitId: String,
    fruitName: String,
    isChecked: Boolean
  });
  ```
- 위 코드에서 `fruitId`, `fruitName`, `isChecked`는 부모가 넘겨주는 값입니다.

### 2. v-bind(:) 바인드
- `:`는 `v-bind`의 축약형입니다.
- HTML 속성에 JavaScript 표현식의 값을 바인딩할 때 사용합니다.
- 예시:
  ```html
  <input :id="fruitId" :checked="isChecked">
  <label :for="fruitId">
    <img :src="imgSrc" :alt="fruitName">
  </label>
  ```
- 위 코드에서 각 속성은 JS 변수의 값으로 동적으로 설정됩니다.

## 전체 동작 요약
- 부모 컴포넌트가 과일 정보(fruitId, fruitName, isChecked)를 props로 넘겨줍니다.
- defineProps로 해당 값을 받아서, input/label/img 등에 v-bind(:)로 바인딩하여 동적으로 렌더링합니다.
- 이미지 경로도 fruitId에 따라 동적으로 생성됩니다.

---

Vue의 props와 바인딩 개념을 익히기에 좋은 예제입니다.

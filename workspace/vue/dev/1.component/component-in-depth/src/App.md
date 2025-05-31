

# Props
부모 컴포넌트에서 자식 컴포넌트로 props를 전달할 때는 **케밥케이스(kebab-case)**를 사용합니다.  
자식 컴포넌트에서 props를 자바스크립트로 받을 때는 **카멜케이스(camelCase)**로 선언합니다.

```vue
<!-- 부모 컴포넌트에서 전달 -->
<child-component my-prop="value" />

<!-- 자식 컴포넌트에서 받기 -->
<script>
export default {
  props: {
    myProp: String
  }
}
</script>
```

---
# App.vue 설명

## 파일 위치
`src/App.vue`

## 주요 역할
- 여러 props 및 이벤트 관련 컴포넌트의 예시를 보여주는 메인 컴포넌트
- 버튼 클릭 시 각 예제 컴포넌트가 조건부로 렌더링됨

## 핵심 코드 설명
- `ref`로 현재 보여줄 뷰 상태 관리
- 각 버튼 클릭 시 `view` 값이 변경되어 해당 컴포넌트가 표시됨
- 하위 컴포넌트: TheHeading, AppPropsLiteral, AppPropsObject, ComponentEmitEventTemplate, ComponentEmitEventScriptSetup

## 구조
- 상단 메뉴 버튼: 각 예제 선택
- 선택된 예제에 따라 하위 컴포넌트가 조건부로 렌더링됨

---

- props 전달, 이벤트 emit 등 Vue 컴포넌트의 다양한 기능을 실습할 수 있는 구조입니다.

# ComponentEmitEventTemplate.vue 이벤트 설명

## 파일 위치
`src/components/events/ComponentEmitEventTemplate.vue`

## 핵심: 자식 → 부모 이벤트 전달
- 자식 컴포넌트에서 emit으로 이벤트를 발생시키면, 부모 컴포넌트에서 해당 이벤트를 받아 처리할 수 있음

### 이벤트 수신 방법
- `<ComponentEmitEventTemplateChild v-on:greeting-event="greet" @greeting-arg-event="greetArg" />`
  - `v-on:greeting-event` 또는 `@greeting-event`: greeting-event 발생 시 greet 함수 실행
  - `@greeting-arg-event`: greeting-arg-event 발생 시 greetArg 함수 실행

### 이벤트 핸들러 함수
- `greet`: 인자 없는 이벤트를 받아 message를 고정 메시지로 변경
- `greetArg`: 인자 있는 이벤트를 받아 message를 전달받은 값으로 변경

### 전체 동작
1. 자식 컴포넌트에서 emit으로 이벤트 발생
2. 부모 컴포넌트에서 v-on 또는 @로 이벤트를 받아 함수 실행
3. message 값이 변경되어 화면에 반영됨

---

이 파일은 Vue에서 자식 → 부모로 이벤트를 전달하고 처리하는 기본 구조를 보여줍니다.

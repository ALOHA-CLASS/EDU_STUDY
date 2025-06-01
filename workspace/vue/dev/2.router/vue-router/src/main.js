import { createApp } from "vue";
import App from "./App.vue";

// ./router/index.js 파일에서 라우터를 가져옵니다. (index.js는 생략 가능)
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Vue 앱 생성
const app = createApp(App);

// 라우터를 앱에 등록
app.use(router);

// 앱을 DOM에 마운트
app.mount("#app");

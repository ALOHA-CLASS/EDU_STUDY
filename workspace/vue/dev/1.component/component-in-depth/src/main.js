// main.js: 애플리케이션의 진입점 파일입니다.
// './assets/main.css'를 import하려면 주석을 해제하세요.
// import './assets/main.css'

// Vue에서 createApp 함수를 import합니다.
import { createApp } from "vue";
// App 컴포넌트를 import합니다.
import App from "./App.vue";

// App 컴포넌트를 #app 엘리먼트에 마운트합니다.
createApp(App).mount("#app");

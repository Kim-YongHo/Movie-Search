import { createApp } from "vue";
import App from "./App";
import router from "./routes";
import store from "./store"; //index.js는 생략 가능

createApp(App).use(router).use(store).mount("#app");

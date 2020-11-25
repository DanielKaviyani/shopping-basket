import { createApp } from "vue";
import App from "./App.vue";
import Store from "./store/index";
import Mixin from "./mixin/index";
import "./assets/style.scss";

const app = createApp(App);
app.mixin(Mixin);
app.use(Store);
app.mount("#app");

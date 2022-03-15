import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "./assets/tailwind.css";
import Unicon from "vue-unicons";
import { uniTimes, uniCheck, uniPlus, uniCarWash } from "vue-unicons/dist/icons";

Unicon.add([uniTimes, uniCheck, uniPlus, uniCarWash]);
createApp(App).use(Unicon).mount('#app')
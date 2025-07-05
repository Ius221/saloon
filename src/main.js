
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';

import TheButton from './components/UI/TheButton.vue';

const app = createApp(App);
app.component('the-button', TheButton);
app.use(router)

app.mount('#app');
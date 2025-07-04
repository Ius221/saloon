
import { createApp } from 'vue'
import App from './App.vue'

import TheButton from './components/UI/TheButton.vue';

const app = createApp(App);
app.component('the-button', TheButton);

app.mount('#app');
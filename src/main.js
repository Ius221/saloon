
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import components from './components/setupImports.js';




const app = createApp(App);
Object.entries(components).forEach(([name, component]) => {
    app.component(name, component);
});
app.use(router)

app.mount('#app');
import { createApp } from 'vue'
import App from './App.vue'
import VueTippy from 'vue-tippy'

const app = createApp(App)

app.use(VueTippy, {
  defaultProps: { placement: 'right' },
})

app.mount('#app')

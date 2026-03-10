import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './style.css'
import Home from './pages/Home.vue'

const routes = [
  { path: '/', component: Home }
]

export const createApp = ViteSSG(
  App,
  { routes },
  () => {
    // Custom setup hooks can go here
  }
)

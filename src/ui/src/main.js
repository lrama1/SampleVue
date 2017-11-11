import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Comment from './components/Comment.vue'
import Comments from './components/Comments.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VeeValidate)

const routes = [
  {path: '/home', component: Home},
  {path: '/comment/:id', component: Comment},
  {path: '/comments', component: Comments}
]

const router = new VueRouter({
  routes // short for routes: routes
})

const App1 = Vue.extend(App)
new App1({router}).$mount('#appCommentVue')
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import videoDetails from './components/video/videoDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/video-details/:id',
      name: 'videoDetails',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: videoDetails,
      props: {
        default: (route) => ({
          id: route.params.id,
        })
      },
      // component: () => import('./components/videoDetails.vue')/* webpackChunkName: "video-details" */
    }
  ]
})

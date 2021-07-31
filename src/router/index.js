import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
    {
		path: '/post',
		name: 'Post',
		component: () => import('../views/Post.vue')
	},
	{
		path: '/user',
		name: 'User',
		component: () => import('../views/User.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
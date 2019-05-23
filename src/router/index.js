import Vue from 'vue'
import Router from 'vue-router'
import page from '@/components/page'
import home from '@/components/home'
import zero from '@/components/zero'
import glory from '@/components/glory'
import sao from '@/components/sao'
import o2o from '@/components/o2o'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: page,
			children: [
				{
					path: '',
					component: home
				},
				{
					path: 'home',
					component: home
				}, {
					path: 'zero',
					component: zero
				}, {
					path: 'glory',
					component: glory
				}, {
					path: 'o2o',
					component: o2o
				}, {
					path: 'sao',
					component: sao
				}
			]
    }
  ]
})

export default{
	name: 'page',
	data() {
		return {
			routerLinks: [{
				to: '/home',
				showClass: true,
				englishName: 'page',
				menuName: '首页'
			},{
				to: '/zero',
				showClass: false,
				englishName: 'zero',
				menuName: 'zero从零开始'
			},{
				to: '/glory',
				showClass: false,
				englishName: 'glory',
				menuName: 'Glory荣耀'
			},{
				to: '/sao',
				showClass: false,
				englishName: 'sao',
				menuName: 'SAO刀剑'
			},{
				to: '/o2o',
				showClass: false,
				englishName: 'o2o',
				menuName: 'LOVE O2O倾城'
			}]
		}
	},
	beforeCreate() {
		
	},
	created() {
		this.refreshVisitedCss(this.$route.path)
	},
	beforeMount() {
		
	},
	mounted() {
	},
	beforeUpdate() {
		
	},
	updated() {
		
	},
	beforeDestroy() {
		
	},
	destroyed() {
		
	},
	methods: {
		// 添加顶部导航栏
		addVisitedCss(index,routerLinks) {
			routerLinks.forEach((val) => {
				val.showClass = false
			})
			routerLinks[index].showClass = true
		},
		// 刷新后判断目前路由地址并在导航栏标明目前浏览地址
		refreshVisitedCss(path) {
			this.routerLinks.forEach((val) => {
				val.to === path ? val.showClass = true : val.showClass = false
			})
		}
	}
}
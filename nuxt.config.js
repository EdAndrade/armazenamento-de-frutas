export default {
	head: {
		title: 'fruit-storage',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	css: [
		'@/assets/style/index.scss'
	],

	styleResources: {
		scss: [
			'@/assets/style/_colors.scss',
		],
	},

	plugins: [
	],

	components: true,

	buildModules: [
	],

	modules: [
	],

	build: {
	}
}

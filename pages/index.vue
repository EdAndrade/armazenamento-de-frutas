<template>

	<section id="indexPage">

		<section id="content">

			<div class="create_bucket_and_fruit">
				<CreateBucket/>
				<CreateFruit/>
			</div>

			<div class="fruits">

			</div>

			<div class="buckets">

			</div>

		</section>
	</section>

</template>

<script>

	import CreateBucket from '@/components/CreateBucket/index.vue'
	import CreateFruit from '@/components/CreateFruit/index.vue'

	export default {

		name: 'IndexPage',

		components: {
			CreateBucket,
			CreateFruit
		}
	}

</script>

<style scoped lang="scss">

</style>
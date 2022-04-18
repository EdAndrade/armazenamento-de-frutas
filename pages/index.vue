<template>

	<section id="indexPage">

		<section id="content">

			<div class="create_bucket_and_fruit">
				<CreateBucket/>
				<CreateFruit/>
			</div>

			<div class="fruits">
				<Fruit/>
				<Fruit/>
				<Fruit/>
			</div>

			<div class="buckets">
				<Bucket/>
				<Bucket/>
				<Bucket/>
			</div>

		</section>
	</section>

</template>

<script>

	import CreateBucket from '@/components/CreateBucket/index.vue'
	import CreateFruit from '@/components/CreateFruit/index.vue'
	import Fruit from '@/components/Fruit/index.vue'
	import Bucket from '@/components/Bucket/index.vue'

	export default {

		name: 'IndexPage',

		components: {
			CreateBucket,
			CreateFruit,
			Fruit,
			Bucket
		}
	}

</script>

<style scoped lang="scss">

	#indexPage{
		width: 100%;
		display: flex;
		justify-content: center;

		#content{
			max-width: 997px;
			width: 100%;
			padding: 53px;
			background-color: $color-light-2;

			.create_bucket_and_fruit{
				
				display: flex;
				justify-content: space-between;
			}

			.fruits{
				margin-top: 21px;
				display: flex;
				
				.fruit{
					margin-right: 23px;
				}
			}

			.buckets{
				width: 100%;
				border-radius: 8px;
				background-color: $background-color-1;
				padding: 29px;
				margin-top: 21px;
				display: flex;
				gap: 20px;
			}
		}
	}

</style>
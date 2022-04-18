<template>

	<section id="indexPage">

		<section id="content">

			<div class="create_bucket_and_fruit">
				<CreateBucket/>
				<CreateFruit/>
			</div>

			<div class="fruits">
				<Fruit v-for="(fruit, index) in fruits" :fruit="fruit" :key="index"/>
			</div>

			<div class="buckets">
				<Bucket v-for="(bucket, index) in buckets" :bucket="bucket" :key="index"/>
			</div>

		</section>
	</section>

</template>

<script>

	import CreateBucket from '@/components/CreateBucket/index.vue'
	import CreateFruit from '@/components/CreateFruit/index.vue'
	import Fruit from '@/components/Fruit/index.vue'
	import Bucket from '@/components/Bucket/index.vue'
	import { mapState } from 'vuex'

	export default {

		name: 'IndexPage',

		components: {
			CreateBucket,
			CreateFruit,
			Fruit,
			Bucket
		},

		computed: {

			...mapState({
				buckets: state => state.buckets.buckets,
				fruits: state => state.fruits.fruits
			})


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
				flex-wrap: wrap;
				max-height: 500px;
				height: auto;
				overflow: hidden;

				&:hover{
					overflow-y: scroll;
				}
			}
		}
	}

</style>
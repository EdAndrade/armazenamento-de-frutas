import { mapActions } from 'vuex'

export default {

    props: {

        bucket: {
            type: Object,
            required: true,
            default: () => {}
        }
    },

    methods: {

        ...mapActions({
            addFruitToBucketAndSortBuckets: 'buckets/addFruitToBucketAndSortBuckets',
            removeFruitFromBucketAndSortBuckets: 'buckets/removeFruitFromBucketAndSortBuckets'
        }),

        removeBucket(){
            if(this.bucket.fruits.length > 0){
                alert("O balde precisa estar vazio para ser eliminado!")
            }else{
                this.$store.commit('buckets/REMOVE_BUCKET', {bucket_id: this.bucket.id})
            }
        },

        getTotal(){
            if(this.bucket.fruits.length > 0){

                return this.bucket.fruits.reduce( (sum, fruit) => {
                    console.log(fruit.fruit_price)
                    return sum+fruit.fruit_price
                }, 0)

            }else{
                return 0
            }
        },

        formatPrice(fruit_price){
            return `R$ ${fruit_price.toFixed(2)}`
        },

        getCapacity(){
            return ( this.bucket.fruits.length/this.bucket.bucket_capacity ) * 100;
        },

        removeFruitFromBucket(fruit_name_to_remove){
            this.removeFruitFromBucketAndSortBuckets({ 
                bucket_id: this.bucket.id,
                fruit_name_to_remove 
            })
        },

        addFruitInBucket(fruit){

            if((this.bucket.fruits.length/this.bucket.bucket_capacity) < 1){
                this.addFruitToBucketAndSortBuckets({
                    bucket_id: this.bucket.id,
                    ...fruit
                })
            }else{
                alert("O balde em questão já atingiu a sua capacidade maxima!")
            }
        }
    }
}
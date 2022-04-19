import { mapState, mapActions } from 'vuex'

export default {

    props: {

        fruit: {
            type: Object,
            required: true,
            default: () => {}
        }
    },

    computed: {
        
        ...mapState({
            buckets: state => state.buckets.buckets
        })
    },

    methods: {

        ...mapActions({
            addFruitToBucketAndSortBuckets: 'buckets/addFruitToBucketAndSortBuckets'
        }),

        floatPrice(price){
            if(price)
                return price.toFixed(2)
        },

        addFruitToBucket(bucket){

            if((bucket.fruits.length/bucket.bucket_capacity) < 1){
                this.addFruitToBucketAndSortBuckets({
                    bucket_id: bucket.id,
                    ...this.fruit
                })
            }else{
                alert("O balde em questão já atingiu a sua capacidade maxima!")
            }
        }
    }
}
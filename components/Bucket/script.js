export default {

    props: {

        bucket: {
            type: Object,
            required: true,
            default: () => {}
        }
    },

    methods: {

        removeBucket(){
            this.$store.commit('buckets/REMOVE_BUCKET', {bucket_id: this.bucket.id})
        },

        getTotal(){
            if(this.bucket.fruits.length > 0){

                return this.bucket.fruits.reduce( (fruit, sum) => {
                    return sum+fruit.fruit_price
                })
                
            }else{
                return 0
            }
        }
    }
}
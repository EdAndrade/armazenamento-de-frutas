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
            if(this.bucket.fruits.length > 0){
                alert("O balde precisa estar vazio para ser eliminado!")
            }else{
                this.$store.commit('buckets/REMOVE_BUCKET', {bucket_id: this.bucket.id})
            }
        },

        getTotal(){
            if(this.bucket.fruits.length > 0){

                return this.bucket.fruits.reduce( (fruit, sum) => {
                    console.log(sum, fruit)
                    return sum+fruit.fruit_price
                })

            }else{
                return 0
            }
        },

        formatPrice(fruit_price){
            return `R$ ${fruit_price.toFixed(2)}`
        }
    }
}
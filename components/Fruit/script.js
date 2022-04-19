import { mapState } from 'vuex'

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

        floatPrice(price){
            if(price)
                return price.toFixed(2)
        }
    }
}
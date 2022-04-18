export default {

    props: {

        fruit: {
            type: Object,
            required: true,
            default: () => {}
        }
    },

    computed: {
        
        
    },

    methods: {

        floatPrice(price){
            if(price)
                return price.toFixed(2)
        }
    }
}
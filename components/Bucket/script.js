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
        }
    }
}
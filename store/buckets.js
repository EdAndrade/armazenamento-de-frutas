export const state = () => ({
    bucket_id_track: 1,
    buckets: []
})

export const mutations = {

    CREATE_BUCKET(state,bucket){
        state.bucket_id_track++
        state.buckets.push({
            id: state.bucket_id_track,
            ...bucket
        })
    },

    REMOVE_BUCKET(state, bucket_id){
        state.buckets = state.buckets.filter( bucket => bucket.id !== bucket_id )
    }
}
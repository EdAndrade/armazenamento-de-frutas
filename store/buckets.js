export const state = () => ({
    bucket_id_track: 1,
    buckets: []
})

export const mutations = {

    CREATE_BUCKET(state, { bucket_capacity }){
        state.buckets.push({
            id: state.bucket_id_track,
            bucket_capacity,
            fruits: []
        })
        state.bucket_id_track++
    },

    REMOVE_BUCKET(state, {bucket_id}){
        state.buckets = state.buckets.filter( bucket => bucket.id !== bucket_id )
    },

    ADD_FRUIT_TO_BUCKET(state, { bucket_id, fruit_name, fruit_price }){
        state.buckets.forEach( bucket => {
            if(bucket.id === bucket_id)
                bucket.fruits.push({ fruit_name, fruit_price })
        })
    },

    REMOVE_FRUIT_FROM_BUCKET(state, { bucket_id, fruit_name_to_remove }){

        let fruitRemoved = false

        for(let i in state.buckets){
            if(fruitRemoved)
                break
            if(bucket_id === state.buckets[i].id){
                state.buckets[i].fruits = state.buckets[i].fruits.filter( fruit => {
                    if( ( fruitRemoved === false ) && fruit.fruit_name === fruit_name_to_remove ){
                        fruitRemoved = true
                        return false
                    }
                    return true
                })
            }
        }
    },

    SORT_BUCKET(state){
        state.buckets.sort( (a, b) => {
            return (( b.fruits.length/b.bucket_capacity ) - ( a.fruits.length/a.bucket_capacity ))
        })
    }
}

export const actions = {

    addFruitToBucketAndSortBuckets( { commit }, { bucket_id, fruit_name, fruit_price }){
        commit('ADD_FRUIT_TO_BUCKET', { bucket_id, fruit_name, fruit_price })
        commit('SORT_BUCKET')
    },

    removeFruitFromBucketAndSortBuckets({ commit }, { bucket_id, fruit_name_to_remove }){
        commit('REMOVE_FRUIT_FROM_BUCKET', { bucket_id, fruit_name_to_remove })
        commit('SORT_BUCKET')
    }
}
export const state = () => ({
    fruit_id_track: 1,
    fruits: []
})

export const mutations = {

    CREATE_FRUIT(state, { fruit_name, fruit_price }){
        state.fruits.push({
            id: state.fruit_id_track,
            fruit_name,
            fruit_price
        })
    }
}
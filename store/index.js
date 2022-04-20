import CreatePersistedState from 'vuex-persistedstate'
import secureLS from 'secure-ls'

const ls = new secureLS({ isCompression: true })

export const state = () => ({})

const indexState = CreatePersistedState({

    key: '!2)@#213fd',

    paths: [
        'buckets.buckets',
        'buckets.bucket_id_track',
        'fruits.fruit_id_track',
        'fruits.fruits'
    ],

    storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key)
    }
})

export const plugins = [
    indexState
]
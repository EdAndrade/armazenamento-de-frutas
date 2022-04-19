<template>
    <form @submit.prevent="createBucket()" class="modal-1">
        <h1>Criar balde</h1>
        <label for="capacityInput">Capacidade</label>
        <input type="number" v-model.number="bucketCapacity" id="capacityInput">
        <button>Salvar</button>
    </form >
</template>

<script>

    export default {

        data(){
            return {
                bucketCapacity: 0
            }
        },

        methods: {

            createBucket(){
                if(this.bucketCapacity <= 0){
                    alert("A capacidade do balde deve ser maior que 0")
                }else{
                    this.$store.commit("buckets/CREATE_BUCKET",  { bucket_capacity: this.bucketCapacity })
                }    
            }
        }
    }
</script>

<style>

</style>
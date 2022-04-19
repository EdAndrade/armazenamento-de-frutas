<template>
    <form @submit.prevent="createFruit()" class="modal-1">
        <h1>Criar Fruta</h1>
        <label for="name">Nome</label>
        <input type="text" v-model="fruit.fruit_name" id="name" step="0.01">
        <label for="price">Preço</label>
        <input type="text" v-model="fruit.fruit_price" id="price">
        <button>Salvar</button>
    </form>
</template>

<script>

    export default {

        data(){

            return {

                fruit: {
                    fruit_name: '',
                    fruit_price: 0
                }
            }
        },

        methods: {

            createFruit(){

                this.fruit.fruit_price = parseFloat(this.fruit.fruit_price)
                if(this.fruit.fruit_name !== '' && ( this.fruit.fruit_price > 0 && typeof(this.fruit.fruit_price) === 'number' )){
                    this.$store.commit('fruits/CREATE_FRUIT', this.fruit)
                    this.cleanFields()
                }else{
                    this.fruit.fruit_price = 0
                    alert('O campo nome deve estar preenchido\nO preço da fruta não pode ser menor que 0 e precisa ser válido')
                }
            },

            cleanFields(){
                this.fruit.fruit_name = ''
                this.fruit.fruit_price = 0
            }
        }
    }

</script>

<style>

</style>
<template>

    <section class="bucket">

        <div class="gross_bucket">
            <div class="top">
                <p class="total">Total: {{ getTotal() }} R$</p>
                <button class="remove" @click="removeBucket">
                    <img src="~assets/images/trash-2.png" alt="">
                </button>
            </div>

            <div class="fruits">
                <div class="fruit" v-for="(fruit, index) in bucket.fruits" :key="index">
                    <p class="fruitName">{{ fruit.fruit_name }}</p>
                    <p class="fruitPrice">{{ formatPrice(fruit.fruit_price) }}</p>

                    <div class="fruitActions">
                        <div class="addFruit" @click="addFruitInBucket(fruit)">
                            <img src="~assets/images/plus-square.png" alt="">
                        </div>
                        <div class="removeFruit" @click="removeFruitFromBucket(fruit.fruit_name)">
                            <img src="~assets/images/trash-3.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <p class="capacity">
            Capacidade: {{ getCapacity() }}%
        </p>
    </section>

</template>

<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>
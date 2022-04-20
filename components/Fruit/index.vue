<template>

    <section class="fruit">

        <div class="description">
            <p class="fruitName">{{ fruit.fruit_name }}</p>
            <p class="fruitPrice">R$ {{ floatPrice(fruit.fruit_price) }}</p>
        </div>

        <div class="addToABucket">
            <img src="~assets/images/plus-square2.png" alt="">
        </div>

        <div class="selectBucket">
            <div class="bucket" v-for="(bucket, index) in buckets" :key="index" @click="addFruitToBucket(bucket)">
                Balde {{ index+1 }}
            </div>
        </div>

    </section>

</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./style.scss"></style>
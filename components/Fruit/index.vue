<template>

    <section class="fruit">

        <div class="description">
            <p class="fruitName">{{ fruit.fruit_name }}</p>
            <p class="fruitPrice">R$ {{ floatPrice(fruit.fruit_price) }}</p>
        </div>

        <div class="addToABucket">
            +
        </div>

    </section>

</template>

<script src="./script.js"></script>

<style scoped lang="scss" src="./style.scss"></style>
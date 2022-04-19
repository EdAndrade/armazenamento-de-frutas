<template>

    <section class="bucket">

        <div class="gross_bucket">
            <div class="top">
                <p class="total">Total: {{ getTotal() }}</p>
                <button class="remove" @click="removeBucket">
                    <img src="/trash-2.png" alt="">
                </button>
            </div>

            <div class="fruits">
                <div class="fruit">
                    <p class="fruitName">Fruta A</p>
                    <p class="fruitPrice">R$ 3.90</p>
                </div>

                <div class="fruit">
                    <p class="fruitName">Fruta A</p>
                    <p class="fruitPrice">R$ 3.90</p>
                </div>
            </div>
        </div>

        <p class="capacity">
            Capacidade 50%
        </p>
    </section>

</template>

<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>
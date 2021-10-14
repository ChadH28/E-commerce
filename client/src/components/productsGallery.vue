<template>
    <div class="gallery-container">
        <div class="image-gallery">
            <div class="image-container" v-for="(item,index) in clothing_items" :key="index">
                <img :src="item.image" class="img-fluid gallery-image" alt="Vue image">
            </div>
            <!-- <img src="../assets/golfer.jpg" class="img-fluid gallery-image" alt="Vue image">
                    <img src="../assets/hoodie.jpg" class="img-fluid gallery-image" alt="Vue image">
                    <img src="../assets/beanie.jpg" class="img-fluid gallery-image" alt="Vue image">
                    <img src="../assets/crew.jpg" class="img-fluid gallery-image" alt="Vue image">
                    <img src="../assets/v-neck.jpg" class="img-fluid gallery-image" alt="Vue image"> -->
        </div>
    </div>
</template>

<script>
import { products } from '../data.js';
export default {
    name: 'products',
    props: {
        msg: String
    },
    data() {
        return {
            clothing_items: products,
            cart: []
        }
    },
    methods: {
        addToCart(product) {
            let cart = []
            if (JSON.parse(localStorage.getItem('products'))) {
                cart = JSON.parse(localStorage.getItem('products'))
            } else {
                cart = []
            }
            cart.push(product);
            localStorage.getItem('products', JSON.stringify(cart))
        }
    },
    created() {
        let cart = []
        if (JSON.parse(localStorage.getItem('products'))) {
            cart = JSON.parse(localStorage.getItem('products'))
        } else {
            cart = []
        }
        for (let cart_item = 0; cart_item < cart.length; cart_item++) {
          for (let item = 0; item < this.clothing_items.length; item++) {
            if (cart[cart_item].id == this.clothing_items[item].id) {
              this.clothing_items[item].cart = true
            }
          }
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gallery-container {
    margin: auto;
}

.image-gallery {
    margin-top: 10px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: masonry;
    width: 100%
}

.gallery-image {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    display: block;
}

.gallery-image:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    cursor: pointer;
}
</style>

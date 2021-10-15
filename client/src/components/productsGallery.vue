<template>
    <div class="gallery-container">
        <div class="image-gallery">
            <div class="image-container" v-for="(item,index) in clothing_items" :key="index">
                <div class="card gallery-image-container" :disabled='item.numInStock == 0'>
                    <div v-if="item.numInStock == 0" class="stock-overlay">
                        Sorry out of stock
                    </div>
                    <img :src="item.image" class="img-fluid gallery-image" alt="Vue image">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text">R{{item.price}}</p>
                        <a v-if="item.numInStock === 0" class="d-none">Out of Stock</a>
                        <a @click="item.cart=true,addToCart(JSON.parse(JSON.stringify(item)))" v-if="!item.cart" :disabled='item.cart' class="btn btn-primary">Add to Cart</a>
                        <a v-if="item.cart" :disabled='item.cart' class="btn btn-warning">Added to cart</a>
                    </div>
                </div>
            </div>
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
        }
    },
    methods: {
        addToCart(clothing) {
            let cart = []
            if (JSON.parse(localStorage.getItem('clothing_items'))) {
                cart = JSON.parse(localStorage.getItem('clothing_items'))
            } else {
                cart = []
            }
            cart.push(clothing);
            console.log('clothing added to cart');
            localStorage.setItem('clothing_items', JSON.stringify(cart)); // Setting cart item in localstorage
        }
    },
    created() {
        let cart = []
        if (JSON.parse(localStorage.getItem('clothing_items'))) {
            cart = JSON.parse(localStorage.getItem('clothing_items'))
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

.gallery-image-container{
position: relative;
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
    height: 350px;
}

.gallery-image:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    cursor: pointer;
}

.stock-overlay {
  position: absolute;
  /* border-top-left-radius: 8px;
  border-top-right-radius: 8px; */
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  /* Black see-through */
  width: 100%;
  opacity: 1;
  color: white;
  font-size: 20px;
  padding: 15px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 15px;
}
</style>

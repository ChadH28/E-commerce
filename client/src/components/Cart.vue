<template>
    <div>
        <div class="modal-dialog ">
            <div class="modal-content cart-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="cartModalLabel">Cart Items</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="cart-title">
                                            <h5 class="card-title">Card title </h5>
                                        </div>
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src="../../public/assets/golfer.jpg" class="img-fluid rounded-start" alt="...">
                                            </div>
                                            <!-- <h5 class="card-title">Card title {{data.title}}</h5>
                                                                                <p class="card-text">id {{data.id}}</p>
                                                                                <p class="card-text">price in total {{data.item.price * data.item.quantity}}</p>
                                                                                <p class="card-text"><button class="btn btn-danger">remove</button></p> -->
                                            <div class="col-md-2">
                                                <p class="card-text">id </p>
                                            </div>
                                            <div class="col-md-2">
                                                <p class="card-text">R 100</p>
                                            </div>
                                            <div class="col-md-4">
                                                <p class="card-text"><button class="btn btn-danger">remove</button></p>
                                                <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="row g-0">
                                            <div class="col-md-6">
    
                                                <p class="card-text">Quantity: 0</p>
                                            </div>
                                            <div class="col-md-6">
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <router-link to="/checkout" type="button" class="btn btn-primary">Off to Checkout</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import {db} from '@/firebase.js'
export default {
    name: 'Cart',
    props: {
        msg: String
    },
    data() {
        return {
            counter: 0,
            cart: [],
            fields: ['#', 'remove', 'image', 'name', 'numInStock', 'price'] //data return from firebase
        }
    },
}
</script>


<style>
/* .cart-content{
    width: 800px;
} */

.cart-title {
    text-align: center
}
</style>

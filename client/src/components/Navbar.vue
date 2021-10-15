<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/"> Luma</router-link>
                <div class="d-flex">
                    <div class="nav-item">
                        <a data-bs-toggle="modal" data-bs-target="#cartModal" class="nav-link"><i class="fa fa-shopping-bag"></i> 0</a>
                    </div>
                    <div class="nav-item">
                        <a class="nav-link">Sign In</a>
                    </div>
                </div>
            </div>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                          <span class="navbar-toggler-icon"></span>
                                          </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <!-- <li class="nav-item">
                                                        <router-link class="nav-link active" to="/">Home</router-link>
                                                    </li> -->
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">What's new</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/categories">Woman</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/categories/product/1">Men</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Gear</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Training</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Modal -->
        <CartModal class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
        </CartModal>
    </div>
</template>


<script>
import CartModal from './Cart'
export default {
    components: {
        CartModal
    },
    data() {
        return {
            cart: '',
            form: {
                user: '',
                password: ''
            }
        }
    },
    methods: {
        gotoCheckout() {
            this.$router.push('checkout')
        },
        // onSubmit(e) {
        //     e.preventDefault();
        //     if(this.form.user == 'admin' && this.form.password == '1234') {
        //         this.$router.push('checkout');
        //         localStorage.setItem('admin', JSON.stringify('true'))
        //     } else {
        //         return false;
        //     }
        // }
    },
}
</script>



<style>
.nav-item,
.nav-link {
    color: black;
    cursor: pointer;
}
</style>

<template>
    <div>
        <div class="container">
          <Sidebar/>
          <div class='control-bar'>
            <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">FILTER</button>
          </div>
          <div v-if="showProducts" class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <div class="col" v-for="item in items" :key="item.id" >
              <div class="card">
                <img alt="Vue picture" id='card-img' class="card-img-top" :title="item.name" src="../assets/slim.jpg">
                <div class="card-body">
                  <h5 class="card-title">{{item.name}}</h5>
                  <div class="card-text">
                    <p class='item-price'>
                      R {{item.price}}
                    </p>
                  </div>
                  <div class="card-text">
                    <div class="colors-wrap">
                      <span class="colors"></span>
                      <span class="colors selected"></span>
                      <span class="colors"></span>
                    </div>
                  </div>
                  <div class="card-text">
                    <div class="size-wrap">
                      <span class="size">XS</span>
                      <span class="size">S</span>
                      <span class="size selected">M</span>
                      <span class="size">L</span>
                      <span class="size">XL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
    </div>
</template>

<script>
import {products} from '../data.js';
import Sidebar from '../components/Sidebar'
export default {
    name: "Category",
    components: {
      Sidebar
    },
      data () {
        return {
          showProducts: true,
          items: products
        }
  },
  methods: {
    toggleProducts() {
      this.showProducts = !this.showProducts
    },
    handleClick() {
      this.showProducts = !this.showProducts
    },
   },
};




</script>

<style>


#card-img{
  height: 300px;
  padding: 10px
}

#card-img:hover{
  cursor: pointer;
}

.card-title{
  font-family: 'Josefin Sans', sans-serif;
	font-size: 1.4em; 
	font-weight: 400;
	color: #484848;
	font-weight: bold;
}

.item-price{
  font-family: 'Josefin Sans', sans-serif; 
	font-weight: 200;
	color: black;
	font-weight: bold;
}


.selected{
	box-shadow: 0 0 0 4px #fff, 0 0 0 8px rgba(173, 173, 170, .3);
}

.colors-wrap, .size-wrap{
	width: 100%;
	margin: 5px auto;
	padding: 10px;
	border-radius: 70px;
	display: flex;
  
}

.colors{
  width:30px;
  height:20px;
  display:inline-block;
  transition:0.3s all;
  background: #ef8bef;
  transition: all .3s;
  margin: 0 5px;
}

.colors:hover, .size:hover{
  transform: scale(1.0);
  box-shadow: 0 0 0 8px rgba(173, 173, 170, .3);
  cursor: pointer;
}

.colors:active, .size:active{
  transform: scale(.8);
}

.colors:nth-child(2){
  background: #f43542;
}.colors:nth-child(3){
  background: #ffe55b;
}.colors:nth-child(4){
  background: #6cf96c;
}

.size{
  background-color: #eceff1;
  border: 2px solid rgb(190, 190, 190);
  padding: 10px;
  width: 40px;
  height: 30px;
  display: flex;
  align-items: center;
  margin: 0 5px;
	cursor: pointer;
	transition: all .3s;
  font-family: 'Josefin Sans', sans-serif; 
	font-weight: 200;
}

.control-bar{
  padding:10px;
}

/* #nav-link-header:last-of-type {
  border-bottom: 1px solid #455a64; 
} */

</style>

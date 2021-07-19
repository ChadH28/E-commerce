<template>
    <!-- sidebar -->
    <div>
        <div class="container">
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
        <div class="offcanvas offcanvas-start sidebar" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h3 class="offcanvas-title sidebar-title" id="offcanvasScrollingLabel">Tops</h3>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <h4 class="sidebar-subtitle">Shopping Options</h4>
                <hr>
                <div class="accordion accordion-flush" id="accordion">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        CATEGORY
                      </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordion">
                      <div class="accordion-body">
                          <a class="dropdown-item" href="#">Mens Tops</a>
                          <a class="dropdown-item" href="#">Womans Tops</a>
                          <a class="dropdown-item" href="#">Hoodies</a>
                          <a class="dropdown-item" href="#">Pants</a>
                          <a class="dropdown-item" href="#">Gear</a>
                          <a class="dropdown-item" href="#">Training</a>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        SIZE
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordion">
                      <div class="accordion-body">
                        <a class='nav-item' href="#">XS</a> |
                        <a class='nav-item' href="#">S</a> |
                        <a class='nav-item' href="#">M</a> |
                        <a class='nav-item' href="#">L</a> |
                        <a class='nav-item' href="#">XL</a>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        STYLE
                      </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordion">
                      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFour">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        CLIMATE
                      </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordion">
                      <div class="accordion-body">
                        <a class="dropdown-item" href="#">For the Hot Summer Days</a>
                        <a class="dropdown-item" href="#">For the Cold Winter Days</a>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingSix">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        MATERIAL
                      </button>
                    </h2>
                    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordion">
                      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingSeven">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        PRICE
                      </button>
                    </h2>
                    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordion">
                      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {products} from '../data.js'
export default {
    name: "Category",
    components: {},
      data () {
        return {
          showProducts: true,
          items: products
        }
  },
  methods: {
    toggleProducts() {
      this.showProducts = !this.showProducts
    }
   },
};




</script>

<style>
.sidebar {
    margin-top: 115px;
    border-top: black 0.5px solid;
}

.sidebar-title {
    padding: 15px 10px;
    text-align: center;
    font-size: 42px;
}

.sidebar-subtitle {
    padding: 20px;
}

.nav ul {
 list-style-type: none;
}

.nav a {
    background: none;
    /* border-bottom: 1px solid #455a64; */
    color: black;
    text-transform: capitalize;
    font-size: 14px;
    padding: 16px 24px;
}

.active{
  color: tomato
}

.nav a:hover {
    background-color: #eceff1;
    color: black
}

#nav-link-header{
  border-top: 1px solid #455a64;
}

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
  margin: 0 15px;
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
  width: 45px;
  height: 30px;
  display: flex;
  align-items: center;
  margin: 0 15px;
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

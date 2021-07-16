<template>
  <div class="container">
    <div class='row'>
      <div class="col-6 col-md-6 col-sm-12 carousel-section">
        <div class="carousel-container">
          <div class="mySlides">
            <img src="../assets/slim.jpg" style="width:100%">
          </div>

          <div class="mySlides">
            <img src="../assets/slim.jpg" style="width:100%">
          </div>

          <div class="mySlides">
            <img src="../assets/slim.jpg" style="width:100%">
          </div>
        
          <a class="prev" onclick="plusSlides(-1)">❮</a>
          <a class="next" onclick="plusSlides(1)">❯</a>

          <div class="carousel-row">
            <div class="carousel-column">
              <img class="demo cursor" src="../assets/slim.jpg" style="width:100%" onclick="currentSlide(1)" alt="The Woods">
            </div>
            <div class="carousel-column">
              <img class="demo cursor" src="../assets/slim.jpg" style="width:100%" onclick="currentSlide(2)" alt="Cinque Terre">
            </div>
            <div class="carousel-column">
              <img class="demo cursor" src="../assets/slim.jpg" style="width:100%" onclick="currentSlide(3)" alt="Mountains and fjords">
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-6 col-md-6 col-sm-12  description">
        <div class="">
          <div class="card-body">
            <h2 class="card-title">Stellar Solar Jacket</h2>
            <h3 class="card-subtitle mb-2">R45</h3>
            <hr>
            <div class="card-text">
              <h5>Color</h5>
              <div class="colors-wrap">
                <span class="colors"></span>
                <span class="colors selected"></span>
                <span class="colors"></span>
              </div>
            </div>
            <div class="card-text">
              <h5>Size</h5>
              <div class="size-wrap">
                <span class="size">XS</span>
                <span class="size">S</span>
                <span class="size selected">M</span>
                <span class="size">L</span>
                <span class="size">XL</span>
              </div>
            </div>
            <div class="card-text">
              <h5>Qty</h5>
              <span class="quantity">
                <input type="number" min="0" max="10" step="1" value="1">
              </span>
            </div>
            <div class="card-text">
              <button class="btn btn-primary add-to-cart" type='submit'> Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
   
  },
  
}



</script>

<style>

.carousel-img{
  height: 600px;
  width:200px;

}

.carousel-section{
  background-color: aquamarine
}

.description{
  /* background-color: tomato */
}

.quantity input {
  width: 60px;
  height: 35px;
  padding: 5px;
  line-height: 1.65;
  border: 2px solid rgb(190, 190, 190);
  margin: 0 15px;
}

.quantity input:focus{
  border: 2px solid #eee;
}

.add-to-cart{
  margin-top: 20px;
  width: 50%;

}







/* Position the image container (needed to position the left and right arrows) */
.carousel-container {
  position: relative;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Add a pointer when hovering over the thumbnail images */
.cursor {
  cursor: pointer;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.carousel-row:after {
  content: "";
  display: table;
  clear: both;
}

/* Six columns side by side */
.carousel-column {
  float: left;
  width: 16.66%;
}

/* Add a transparency effect for thumnbail images */
.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}




</style>



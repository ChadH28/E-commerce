<template>
  <div class="container">
    <div class='row'>
      <div class="col-6 col-md-6 col-sm-12 carousel-section">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../../public/assets/golfer.jpg" id="carousel-image" class="d-block w-100 img-fluid" alt="../../public/assets/golfer.jpg">
            </div>
            <div class="carousel-item">
              <img src="../../public/assets/hoodie.jpg" id="carousel-image" class="d-block w-100 img-fluid" alt="../../public/assets/golfer.jpg">
            </div>
            <div class="carousel-item">
              <img src="../../public/assets/tapered.jpg" id="carousel-image" class="d-block w-100 img-fluid" alt="../../public/assets/golfer.jpg">
            </div>
          </div>
            <ul class="carousel-indicators list-inline thumbnail-holder">
                <li class="list-inline-item active">
                    <a data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
                        <img src="../../public/assets/golfer.jpg" id="thumbnail" class="img-fluid">
                    </a>
                </li>
                <li class="list-inline-item">
                    <a data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                        <img src="../../public/assets/hoodie.jpg" id="thumbnail" class="img-fluid">
                    </a>
                </li>
                <li class="list-inline-item">
                    <a data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
                        <img src="../../public/assets/tapered.jpg" id="thumbnail" class="img-fluid">
                    </a>
                </li>
            </ul>
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
  name: 'Product',
  components: {
   
  },
  
}



</script>

<style>

.carousel-img{
  height: 600px;
  width:200px;

}

.carousel-control-prev-icon{
  text-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.carousel-control-next-icon{
  text-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

#thumbnail{
  height: 60px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.carousel-section{
  
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


.carousel-row:after {
  content: "";
  display: table;
  clear: both;
}


#carousel-image{
  height: 50vh
}



</style>



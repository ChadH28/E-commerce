<template>
    <div class="home container">
        <!-- carousel -->
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="carousel-caption d-none d-md-block">
                        <div class="row">
                            <div class="col-md-4 col-lg-4 col-sm-12">
                                <div id="floater" class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Shirts</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, omnis.</p>
                                        <a href="#" class="btn btn-primary">Shop new shirts</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="../assets/slim.jpg" class="d-block w-100 bannerimg img-fluid" alt="./assets/slim.jpg">
                </div>
                <div class="carousel-item">
                    <div class="carousel-caption d-none d-md-block">
                        <div class="row">
                            <div class="col-md-4 col-lg-4 col-sm-12">
                                <div id="floater" class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Hoodies</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam.</p>
                                        <a href="#" class="btn btn-primary">Shop new Hoodies</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="../assets/hoodie.jpg" class="d-block w-100 bannerimg img-fluid" alt="./assets/slim.jpg">
                </div>
                <div class="carousel-item">
                    <div class="carousel-caption d-none d-md-block">
                        <div class="row">
                            <div class="col-md-4 col-lg-4 col-sm-12">
                                <div id="floater" class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Shorts</h5>
                                        <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum?</p>
                                        <a href="#" class="btn btn-primary">Shop new shorts</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="../assets/shorts.jpg" class="d-block w-100 bannerimg img-fluid" alt="./assets/slim.jpg">
                </div>
            </div>
        </div>

        <!-- gallery -->
        <div class="image-gallery">
       
            <img src="../assets/golfer.jpg" class="img-fluid gallery-image" alt="Vue image">
            <img src="../assets/hoodie.jpg" class="img-fluid gallery-image" alt="Vue image">
            <img src="../assets/beanie.jpg" class="img-fluid gallery-image" alt="Vue image">
            <img src="../assets/crew.jpg" class="img-fluid gallery-image" alt="Vue image">
            <img src="../assets/v-neck.jpg" class="img-fluid gallery-image" alt="Vue image">
        </div>
       
    </div>
</template>

<script>
// @ is an alias to /src


export default {
    name: 'Home',
    components: {

    }
}
</script>


<style>

.bannerimg{
    height: 70vh; 
}

#floater{
    color: black; 
    background-color: rgba(255, 255, 255, 0.6);
    width:100%;
}

.image-gallery{
    margin-top: 50px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: masonry;
    width: 100%      
}

.gallery-image{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    display: block;
}


</style>

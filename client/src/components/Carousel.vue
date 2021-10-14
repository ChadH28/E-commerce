<template>
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
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
                <img src="../../public/assets/slim.jpg" class="d-block w-100 bannerimg img-fluid" alt="Vue image">
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
                <img src="../../public/assets/hoodie.jpg" class="d-block w-100 bannerimg img-fluid" alt="Vue image">
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
                <img src="../../public/assets/shorts.jpg" class="d-block w-100 bannerimg img-fluid" alt="Vue image">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    props: {

    }
}
</script>


<style>

#carousel{
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

</style>

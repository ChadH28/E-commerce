<template>
    <div class="home container">
        <!-- carousel -->
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <!-- <img src="..." class="d-block w-100" alt="..."> -->
                    <div>1</div>
                </div>
                <div class="carousel-item">
                    <!-- <img src="..." class="d-block w-100" alt="..."> -->
                    <div>2</div>
                </div>
                <div class="carousel-item">
                    <!-- <img src="..." class="d-block w-100" alt="..."> -->
                    <div>3</div>
                </div>
            </div>
        </div>

        <!-- gallery -->
        <div>
          <div class="row" data-masonry='{"percentPosition": true }' >
            <div class='col'></div>
            <div class='col'></div>
            <div class='col'></div>
            <div class='col'></div>
            <div class='col'></div>
          </div>
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

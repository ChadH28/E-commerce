<template>
    <div class="home container">
        <!-- carousel -->
        <Carousel/>
        <!-- gallery -->
        <Products/>
    </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '../components/Carousel';
import Products from '../components/productsGallery'

export default {
    name: 'Home',
    components: {
        Carousel,
        Products
    },
    data() {
        return {
            
        }
    },
}



</script>


<style>

.bannerimg{
    height: 70vh; 
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}




#floater{
    color: black; 
    background-color: rgba(255, 255, 255, 0.6);
    width:100%;
}

</style>

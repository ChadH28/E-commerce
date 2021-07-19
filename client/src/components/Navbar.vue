<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/"> Luma</router-link>
                    <div class="nav-item">
                        <router-link class="nav-link" to="/checkout"><i class="fa fa-shopping-bag"></i> 0</router-link>
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
    </div>
</template>

<style>

.nav-item, .nav-link{
  color: black
}

</style>

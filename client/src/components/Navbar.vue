<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/"> Luma</router-link>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        <div>
                            <p><i class="fas fa-thumbs-up"></i> 0</p>
                        </div>
                    </form>
                    
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

.fa-thumbs-up{
    color: black
}

</style>



    <router-link class="nav-link active" to="/">Home</router-link>
    |
    <router-link class="nav-link" to="/about">About</router-link>
    |
    <router-link class="nav-link" to="/login">Login</router-link>
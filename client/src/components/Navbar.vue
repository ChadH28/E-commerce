<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/"> Luma</router-link>
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
                            <a class="nav-link" href="#">Woman</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Men</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Gear</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Training</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sale</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>




    <router-link class="nav-link active" to="/">Home</router-link>
    |
    <router-link class="nav-link" to="/about">About</router-link>
    |
    <router-link class="nav-link" to="/login">Login</router-link>
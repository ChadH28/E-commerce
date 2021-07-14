<template>
    <!-- sidebar -->
    <div>
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <div class="card-text">
                    <p>
                      R35
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <div class="card-text">
                    <p>
                      R35
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <div class="card-text">
                    <p>
                      R35
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <div class="card-text">
                    <p>
                      R45
                    </p>
                  </div>
                  <div class="card-text">
                    <p>
                      R45
                    </p>
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
                <ul class="nav flex-column">
                  <li id='nav-link-header' class="nav-item dropdown">
                      <a  class="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#category" role="button" aria-expanded="false" aria-controls="category">
                        CATEGORY
                      </a>
                      <ul class="collapse" id="category">
                        <div>
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                        </div>
                      </ul>
                  </li>
                  <li id='nav-link-header' class="nav-item dropdown">
                      <a  class="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#size" role="button" aria-expanded="false" aria-controls="size">
                        SIZE
                      </a>
                      <ul class="collapse" id="size">
                        <div>
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                        </div>
                      </ul>
                  </li>
                  <li id='nav-link-header' class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#style" role="button" aria-expanded="false" aria-controls="style">
                        STYLE
                      </a>
                      <ul class="collapse" id="style">
                        <div>
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                        </div>
                      </ul>
                  </li>
                  <li id='nav-link-header' class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#climate" role="button" aria-expanded="false" aria-controls="climate">
                        CLIMATE
                      </a>
                      <ul class="collapse" id="climate">
                        <div>
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                        </div>
                      </ul>
                  </li>
                  <li id='nav-link-header' class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#color" role="button" aria-expanded="false" aria-controls="color">
                        COLOR
                      </a>
                      <ul class="collapse" id="color">
                        <div>
                          <li><a class="dropdown-item" href="#">For Your Warm Sunny Days</a></li>
                          <li><a class="dropdown-item" href="#">For Your Cold Winter Days</a></li>
                        </div>
                      </ul>
                  </li>
                  <li id='nav-link-header' class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#material" role="button" aria-expanded="false" aria-controls="material">
                        MATERIAL
                      </a>
                      <ul class="collapse" id="material">
                        <div>
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                        </div>
                      </ul>
                  </li>
                  <li id='nav-link-header' class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#price" role="button" aria-expanded="false" aria-controls="price">
                        PRICE
                      </a>
                      <ul class="collapse" id="price">
                        <div>
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                        </div>
                      </ul>
                  </li>
                  <li id='nav-link-header' class="nav-item">
                      <h4 class="sidebar-subtitle">Wish List</h4>
                  </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Category",
    components: {},
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

/* #nav-link-header:last-of-type {
  border-bottom: 1px solid #455a64; 
} */

</style>

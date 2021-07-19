<template>
    <div class="sidenav">
        <div class="offcanvas offcanvas-start sidebar" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h3 class="offcanvas-title sidebar-title" id="offcanvasScrollingLabel">Tops</h3>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <h4 class="sidebar-subtitle">Shopping Options</h4>
                <hr>
                <div class="accordion accordion-flush" id="accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            CATEGORY
                          </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordion">
                            <div class="accordion-body">
                                <a class="dropdown-item" href="#">Mens Tops</a>
                                <a class="dropdown-item" href="#">Womans Tops</a>
                                <a class="dropdown-item" href="#">Hoodies</a>
                                <a class="dropdown-item" href="#">Pants</a>
                                <a class="dropdown-item" href="#">Gear</a>
                                <a class="dropdown-item" href="#">Training</a>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            SIZE
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordion">
                            <div class="accordion-body">
                                <a class='nav-item' href="#">XS</a> |
                                <a class='nav-item' href="#">S</a> |
                                <a class='nav-item' href="#">M</a> |
                                <a class='nav-item' href="#">L</a> |
                                <a class='nav-item' href="#">XL</a>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            STYLE
                          </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordion">
                            <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. A amet pariatur voluptatum! Nesciunt, blanditiis cumque!</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            CLIMATE
                          </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordion">
                            <div class="accordion-body">
                                <a class="dropdown-item" href="#">For the Hot Summer Days</a>
                                <a class="dropdown-item" href="#">For the Cold Winter Days</a>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingSix">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            MATERIAL
                          </button>
                        </h2>
                        <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordion">
                            <div class="accordion-body">
                                <a class="dropdown-item" href="#">Cotton</a>
                                <a class="dropdown-item" href="#">Wool</a>
                                <a class="dropdown-item" href="#">Silk</a>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingSeven">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                            PRICE
                          </button>
                        </h2>
                        <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordion">
                            <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. A amet pariatur voluptatum! Nesciunt, blanditiis cumque!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>

.sidebar {
    margin-top: 115px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 50px;
    border-right: none
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



</style>

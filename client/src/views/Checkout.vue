<template>
  <div class="container">
    <h2>Shipping Address</h2>
    <hr>
    <div class="row">
      <div class="col-md-8 shipping-form-section">
        <form class="form-inline" action="/action_page.php">
          <label for="email">Email Address <span class="required">*</span></label>
            <input type="email" class="form-control" placeholder="Enter email" id="email">
            <p>You can create am account after checkout.</p>
            <hr>
          <label for="name">First Name <span class="required">*</span></label>
            <input type="text" class="form-control" id="name">
          <label for="Lname">Last Name <span class="required">*</span></label>
            <input type="text" class="form-control" id="Lname">
          <label for="company">Company <span class="required">*</span></label>
            <input type="text" class="form-control" id="company">
          <label for="address">Street Address <span class="required">*</span></label>
            <input type="address" class="form-control" id="address">
            <input type="address" class="form-control" id="address2">
          <label for="city">City <span class="required">*</span></label>
            <input type="text" class="form-control" id="city">
              <label for="province">Province / State</label>
                <select class="browser-default form-control" id="province" name="province">
                    <option value="Western Cape">Western Cape</option>
                    <option value="Eastern Cape">Eastern Cape</option>
                    <option value="Northern Cape">Northern Cape</option>
                    <option value="North West">North West</option>
                    <option value="Free State">Free State</option>
                    <option value="Kwazulu Natal">Kwazulu Natal</option>
                    <option value="Gauteng">Gauteng</option>
                    <option value="Limpopo">Limpopo</option>
                    <option value="Mpumalanga">Mpumalanga</option>
                </select>
              <label for="postal">Postal Code <span class="required">*</span></label>
                <input type="text" class="form-control" id="postal">
          <button type="submit" class="btn btn-primary">Submit</button>
        </form> 
      </div>
      <div class="col-md-4">
        <div class="card order-section">
          <div class="card-body">
            <h3 class="card-title">Order Summary</h3>
            <hr>
            <p class="card-text">Cash Subtotal</p>
            <p class="card-text">Shipping</p>
            <hr>
            <h5>Order Total</h5>
            <div class="accordion accordion-flush order-accordion" id="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header" >
                  <p class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse" aria-expanded="false" aria-controls="flush-collapseOne">
                    Items in cart
                  </p>
                </h2>
                <div id="flush-collapse" class="accordion-collapse collapse" data-bs-parent="#accordion">
                  <div class="accordion-body">
                    <div>
                      <div>Item 1</div>
                      <div>Item 2</div>
                      <div>Item 3</div>
                    </div>
                  </div>
                </div>
              </div>
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
  name: 'Checkout',
  components: {
    
  }
}
</script>

<style scoped>

.shipping-form-section{
  /* background-color: aqua */
}

form{
  padding: 5px
}

.required{
  color:red
}

.order-section{
  background-color: rgb(190, 190, 190);
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.form-control{
  margin-bottom: 10px;
}


.accordion-body,
.accordion-header,
.accordion-item,
.order-accordion,
.accordion-button,
.accordion-collapse
{
  background-color: rgb(190, 190, 190); 
}



</style>

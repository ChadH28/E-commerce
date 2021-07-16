<template>
  <div class="container">
    <h2>Shipping Address</h2>
    <hr>
    <div class="row">
      <div class="col-md-8 shipping-form-section">
        <form class="form-inline" action="/action_page.php">
          <label for="email">Email Address <span>*</span></label>
            <input type="email" class="form-control" placeholder="Enter email" id="email">
            <p>You can create am account after checkout.</p>
            <hr>
          <label for="name">First Name <span>*</span></label>
            <input type="text" class="form-control" id="name">
          <label for="Lname">Last Name <span>*</span></label>
            <input type="text" class="form-control" id="Lname">
          <label for="company">Company <span>*</span></label>
            <input type="text" class="form-control" id="company">
          <label for="address">Street Address <span>*</span></label>
            <input type="address" class="form-control" id="address">
            <input type="address" class="form-control" id="address2">
          <label for="city">City <span>*</span></label>
            <input type="text" class="form-control" id="city">
              <label for="province">Province / State</label>
                <select className="browser-default" id="province" name="province">
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
              <label for="postal">Postal Code <span>*</span></label>
                <input type="text" class="form-control" id="postal">
          <button type="submit" class="btn btn-primary">Submit</button>
        </form> 
      </div>
      <div class="col-md-4 order-section">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
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

<style>

.shipping-form-section{
  background-color: aqua
}

.order-section{
  background-color: coral
}

</style>

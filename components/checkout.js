// ******************************
// CHECKOUT BUTTON
// ******************************

$("#checkout").click(function checkout(){
  clearTable();
  $("#checkout").html(`Update / Checkout`);
    if (basketArray.length == 1){
      clearTable();
      $("#product").html(
        `<div>
        <h3>The total cost of your shop is \xA3${basketTotal.toFixed(2)}</h3>
        <p>Your shop contains ${basketArray.length} item.  Forgotten anything, just search further.</p> 
        <p>Don't forget, your delivery is booked for between ${temp} on ${postDay}.</p>
        </div>
      `);
      purchaseForm();
    } else if (basketArray.length == 0){
      clearTable();
      $("#product").html(
        `<div>
        <h3>You have nothing in your basket currently.</h3>
        <p>Start searching for items with the bar above.</p> 
        <p>Don't forget, your delivery is booked for between ${temp} on ${postDay}.</p>
        </div>
      `);
      onSaleDisplay();
    } else if (basketArray.length > 1){
      clearTable();
      $("#product").html(
        `<div>
        <h3>The total cost of your shop is \xA3${basketTotal.toFixed(2)}</h3>
        <p>Your shop contains ${basketArray.length} items. Forgotten anything, just search further.</p>
        <p>Don't forget, your delivery is booked for between ${temp} on ${postDay}.</p>
        </div>
      `);
      purchaseForm();
    }
  })

// ******************************
// PURCHASE FORM
// ******************************

function purchaseForm(){
  $("#purchaseForm").html(
      `<hr/>
      <div class="container-fluid">

        <div class="row">
          <div class="col-md-6">
            <form>

              <h3>Delivery</h3>

              <div class="form-row p-2">
          
                <div class="col">
                  <label for="first-name">First Name</label>
                  <input type="text" class="form-control" placeholder="First name" id="first-name">
                </div>
          
                <div class="col">
                  <label for="last-name">Last Name</label>
                  <input type="text" class="form-control" placeholder="Last name" id="last-name">
                </div>

              </div>

              <div class="form-row p-2">

                <div class="col">
                  <label for="address-one">Address #1</label>
                  <input type="text" class="form-control" placeholder="First line of address" id="address-one">
                </div>

              </div>

              <div class="form-row p-2">

                <div class="col">
                  <label for="town">Town</label>
                  <input type="text" class="form-control" placeholder="Town" id="town">
                </div>

                <div class="col">
                  <label for="postcode">Postcode</label>
                  <input type="text" class="form-control" placeholder="Postcode" id="postcode">
                </div>

              </div>

              <div class="form-row p-2">

                <div class="col">
                  <label for="email">Email</label>
                  <input type="text" class="form-control" placeholder="Email address" id="email">
                </div>

              </div>
            
            </form>

          </div>

          <div class="col-md-6">
            <form>
              <h3>Payment</h3>

              <div class="d-block my-3">
                <div class="custom-control custom-radio custom-control-inline">
                  <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">
                  <label class="custom-control-label" for="credit">Credit card</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">
                  <label class="custom-control-label" for="debit">Debit card</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">
                  <label class="custom-control-label" for="paypal">Paypal</label>
                </div>
              </div>

              <div class="form-row p-2">
          
                <div class="col">
                  <label for="card-name">Name on card</label>
                  <input type="text" class="form-control"  id="card-name">
                  <small class="text-muted">Full name as displayed on card</small>
                </div>

              </div>
          
              <div class="form-row p-2">

                <div class="col">
                  <label for="card-number">Card number</label>
                  <input type="text" class="form-control" id="card-number">
                </div>

              </div>

              <div class="form-row p-2">
          
                <div class="col">
                  <label for="expiration">Expiration</label>
                  <input type="text" class="form-control" id="expiration">
                </div>
          
                <div class="col">
                  <label for="cvv">CVV</label>
                  <input type="text" class="form-control" id="cvv">
                </div>

              </div>

            </form>


          </div>

        </div>

      </div>`
      )
    }
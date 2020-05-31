// ******************************
// CLEAR TABLE DISPLAY
// ******************************
function clearTable(){
  $("#product").html("");
  $("#purchaseForm").html("");
}

// ******************************
// ADD PRODUCT TO BASKET AREA
// ******************************

function add(productindex){

  if (product[productindex].stock > 0){
    //remove one from stock of product
    product[productindex].stock --;
    // add product to basket array
    basketArray.push(product[productindex]);
    // make property in product array contain basket array position
    product[productindex].basketArrayPos = basketArray.indexOf(product[productindex]);
    // add product cost to basket total
    basketTotal += product[productindex].cost;
    displayBasketTotal();
    
  // display item in basket
    if (product[productindex].onsale){
      $("#basket").append(
        `<div id="basketItem${[productindex]}">
          <div class="card">
            <div class="card-body">

              <h5>${product[productindex].name}</h5>

              <p style="color:red">\xA3${product[productindex].cost.toFixed(2)} - on sale!</p>

              <a role="button" class="btn btn-outline-dark btn-sm" id="minus" onclick="minus()" data-toggle="popover" data-trigger="focus" title="Can't go lower!"><i class="fas fa-minus fa-xs"></i></a>

              <input class="form-control mr-sm-2" type="text" id="quantity-bar" value="${initialValue}" min="1">

              <a role="button" class="btn btn-outline-dark btn-sm" id="plus" onclick="plus()"><i class="fas fa-plus fa-xs"></i></a></br>

              </br>

              <button type="button" class="btn btn-outline-dark" id="removeBtn" onclick="remove(${productindex})">Remove</button>

            </div>
          </div>
        </div>
        `);
    } else {
      $("#basket").append(
        `<div id="basketItem${[productindex]}">
          <div class="card">
            <div class="card-body">

              <h5>${product[productindex].name}</h5>

              <p style="color:blue">\xA3${product[productindex].cost.toFixed(2)}</p>

              <a role="button" class="btn btn-outline-dark btn-sm" id="minus" onclick="minus()" data-toggle="popover" data-trigger="focus" title="Can't go lower!"><i class="fas fa-minus fa-xs"></i></a>

              <input class="form-control mr-sm-2" type="text" id="quantity-bar" value="${initialValue}" min="1">

              <a role="button" class="btn btn-outline-dark btn-sm" id="plus" onclick="plus()"><i class="fas fa-plus fa-xs"></i></a></br>

              </br>

              <button type="button" class="btn btn-outline-dark" id="removeBtn" onclick="remove(${productindex})">Remove</button>

            </div>
          </div>
        </div>
        `);
    }  
  } else {
    // show that item is out of stock
    productArea.innerHTML = `<h3>Sorry, but this product is out of stock.</h3>`
  }
};

// ******************************
// REMOVE PRODUCT FROM BASKET AREA
// ******************************

function remove(productindex){
  $("#basketItem"+[productindex]).remove();
  // re-add item to stock
  product[productindex].stock ++;
  // remove value from basket's total
  basketTotal -= product[productindex].cost;
  // remove item from basket array, based on stored basket array position
  basketArray.splice(product[productindex].basketArrayPos, 1);
  // reset stored basket array position to null
  product[productindex].basketArrayPos = null;
  // redisplay basket total
  displayBasketTotal();
  if (basketArray.length <= 0 ){
    $("#checkout").html(`Update / Checkout`)
  }
  if (basketArray.length == 1){
    $("#product").html(
      `<div>
      <h3>The total cost of your shop is \xA3${basketTotal.toFixed(2)}</h3>
      <p>Your shop contains ${basketArray.length} item.  Forgotten anything, just search further.</p> 
      </div>
    `);
  } else if (basketArray.length == 0) {
    clearTable();
    $("#product").html(
      `<div>
      <h3>The total cost of your shop is \xA3${basketTotal.toFixed(2)}</h3>
      <p>Your shop contains ${basketArray.length} items. Forgotten anything, just search further.</p>
      </div>
    `);
    onSaleDisplay();
  } else if (basketArray.length > 1) {
    $("#product").html(
      `<div>
      <h3>The total cost of your shop is \xA3${basketTotal.toFixed(2)}</h3>
      <p>Your shop contains ${basketArray.length} items. Forgotten anything, just search further.</p>
      </div>
    `); 
  }
};

// ******************************
// DISPLAY BASKET TOTAL
// ******************************

function displayBasketTotal(){
  if (basketArray.length == 1){
    $("#basket-total").html(
      `<div><p>Your basket contains ${basketArray.length} item. <br> The total cost is \xA3${basketTotal.toFixed(2)}</p></div>`
    );
  } else {
    $("#basket-total").html(
      `<div><p>Your basket contains ${basketArray.length} items. <br> The total cost is \xA3${basketTotal.toFixed(2)}</p></div>`
    );
  }  
}
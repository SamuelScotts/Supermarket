// ******************************
// ENABLE / DISABLE POPOVERS FOR MINUS BUTTON
// ******************************

$(function () {
  $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
  trigger: 'focus'
})

// ******************************
// DISPLAY SALE ITEMS IN PRODUCT AREA INITIALLY
// ******************************

function onSaleDisplay(){
  $.each(product, function(productindex){
    if (product[productindex].onsale){
      displayProduct(productindex);
    }
  })
}

// ******************************
// DISPLAY PRODUCT IN PRODUCT AREA
// ******************************
let productArea = $("#product")[0];

// Prevent enter key being used to submit form
$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

// Display products on click of submit button
$("#submit").click(function display(){
  clearTable();
    $.each(product, function(productindex){
      let input = $("#input-bar").val().toUpperCase();
      let inputUpper = product[productindex].name.toUpperCase();
      let inputUpperCategory = product[productindex].category.toUpperCase();
        if (inputUpper.includes(input) || inputUpperCategory.includes(input)){
          if (product[productindex].stock > 0){
            displayProduct(productindex);
          } else{
            productArea.innerHTML = `<h3>Sorry, but this product is out of stock.</h3>`
          }
        } /* else {
          productArea.innerHTML = `<h3>Sorry, but we found no product by that name.  Please, try again.</h3></br>
          <div id="question-icon" style="text-align: center"><i class="fas fa-question fa-10x"></i></div>`
        } */
    })
});

function displayProduct(productindex){
  // Create an initial card
  const card = document.createElement('div');
  card.classList = 'card-body';

  // Make a new card
  if (product[productindex].onsale){
    let content = `
    <div class="card border-dark mb-3" style="width: 10rem; display: inline-block; text-align: center">

        <div class="card-body text-dark">

            <h5>${product[productindex].name}</h5>

            <div>${product[productindex].image}</div>

            <p style="color: red">\xA3${product[productindex].cost.toFixed(2)} - on sale!</p>

            <a role="button" class="btn btn-outline-dark btn-sm" id="minus" onclick="minus()" data-toggle="popover" data-trigger="focus" title="Can't go lower!"><i class="fas fa-minus fa-xs"></i></a>

            <input class="form-control mr-sm-2" type="text" id="quantity-bar" value="${initialValue}" min="1">

            <a role="button" class="btn btn-outline-dark btn-sm" id="plus" onclick="plus()"><i class="fas fa-plus fa-xs"></i></a></br>

            </br>

            <button type="button" class="btn btn-outline-dark" id="addBtn" onclick="add(${productindex})">Add</button>

          <div id="additionalBtns"></div>
        </div>
      </div>
    </div>`;
  // Append new card to container
  productArea.innerHTML += content;
  } else {
  let content = `
    <div class="card border-dark mb-3" style="width: 10rem; display: inline-block; text-align: center">

        <div class="card-body text-dark">

            <h5>${product[productindex].name}</h5>

            <div>${product[productindex].image}</div>

            <p style="color: blue">\xA3${product[productindex].cost.toFixed(2)}</p>

            <a role="button" class="btn btn-outline-dark btn-sm" id="minus" onclick="minus()" data-toggle="popover" data-trigger="focus" title="Can't go lower!"><i class="fas fa-minus fa-xs"></i></a>

            <input class="form-control mr-sm-2" type="text" id="quantity-bar" value="${initialValue}" min="1">

            <a role="button" class="btn btn-outline-dark btn-sm" id="plus" onclick="plus()"><i class="fas fa-plus fa-xs"></i></a></br>

            </br>

            <button type="button" class="btn btn-outline-dark" id="addBtn" onclick="add(${productindex})">Add</button>

          <div id="additionalBtns"></div>
        </div>
      </div>
    </div>`;

  // Append new card to container
  productArea.innerHTML += content;
  }
}

// ******************************
// INCREASE / DECREASE QUANTITY BUTTONS
// ******************************

function minus (){
  if (initialValue > 1){
    initialValue--;
    $("#quantity-bar").val(initialValue);
  }
}

function plus(){
  initialValue++;
  $("#quantity-bar").val(initialValue);
}
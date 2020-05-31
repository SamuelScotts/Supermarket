// ******************************
// ESTABLISH DATE & DAY OF THE WEEK
// ******************************

function establishDateDay(){
  date = new Date().getDate();
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      dayNumber = 0;
      break;
    case 1:
      day = "Monday";
      dayNumber = 1;
      break;
    case 2:
       day = "Tuesday";
       dayNumber = 2;
      break;
    case 3:
      day = "Wednesday";
      dayNumber = 3;
      break;
    case 4:
      day = "Thursday";
      dayNumber = 4;
      break;
    case 5:
      day = "Friday";
      dayNumber = 5;
      break;
    case 6:
      day = "Saturday";
      dayNumber = 6;
  }
}

$(document).ready(function(){
  establishDateDay();
  $("#product").html(`
    <h3>For starters - book an available delivery slot.</h3>
    <ul class="nav nav-tabs">
        <a href="#slots" class="nav-item nav-link" id="monday" onclick="dayActive(monday, 1), setPostDay(1)">Monday</a>
        <a href="#slots" class="nav-item nav-link" id="tuesday" onclick="dayActive(tuesday, 2), setPostDay(2)">Tuesday</a>
        <a href="#slots" class="nav-item nav-link" id="wednesday" onclick="dayActive(wednesday, 3), setPostDay(3)">Wednesday</a>
        <a href="#slots" class="nav-item nav-link" id="thursday" onclick="dayActive(thursday, 4), setPostDay(4)">Thursday</a>
        <a href="#slots" class="nav-item nav-link" id="friday" onclick="dayActive(friday, 5), setPostDay(5)">Friday</a>
        <a href="#slots" class="nav-item nav-link" id="saturday" onclick="dayActive(saturday, 6), setPostDay(6)">Saturday</a>
        <a href="#slots" class="nav-item nav-link" id="sunday" onclick="dayActive(sunday, 0), setPostDay(0)">Sunday</a>
    </ul>
  `)
  if (dayNumber == 0 ){
    $("#sunday").addClass("active");
    setPostDay(0);
    slots(0);
  } else if (dayNumber == 1 ){
    $("#monday").addClass("active");
    setPostDay(1);
    slots(1);
  } else if (dayNumber == 2 ){
    $("#tuesday").addClass("active");
    setPostDay(2);
    slots(2);
  } else if (dayNumber == 3 ){
    $("#wednesday").addClass("active");
    setPostDay(3);
    slots(3);
  } else if (dayNumber == 4 ){
    $("#thursday").addClass("active");
    setPostDay(4);
    slots(4);
  } else if (dayNumber == 5 ){
    $("#friday").addClass("active");
    setPostDay(5);
    slots(5);
  } else if (dayNumber == 6 ){
    $("#saturday").addClass("active");
    setPostDay(6);
    slots(6);
  }
})

// remove active class from initialised day
function dayActive(day, number){
  $("#sunday").removeClass("active");
  $("#monday").removeClass("active");
  $("#tuesday").removeClass("active");
  $("#wednesday").removeClass("active");
  $("#thursday").removeClass("active");
  $("#friday").removeClass("active");
  $("#saturday").removeClass("active");
  $(day).addClass("active");
  slots(number);
}

function setPostDay(number){
  if (number == 0 ){
    postDay = "Sunday";
  } else if (number == 1){
    postDay = "Monday";
  } else if (number == 2){
    postDay = "Tuesday";
  } else if (number == 3){
    postDay = "Wednesday";
  } else if (number == 4){
    postDay = "Thursday";
  } else if (number == 5){
    postDay = "Friday";
  } else if (number == 6){
    postDay = "Saturday";
  }
}

// ******************************
// DISPLAY AVAILABLE SHOP SLOTS
// ******************************
function slots(number){
  $("#slots").html(`
  <ul class="list-group list-group-flush" style="padding-bottom: 30px">
  <li class="list-group-item">
    <div>
      <label id="tab${number}0">0800 to 1000 hours</label>
      <button type="button" class="btn btn-outline-dark" id="${number}0" onclick="storeSlot(${number}0)">Select</button>
    </div>
  </li>
  <li class="list-group-item">
    <div>
      <label id="tab${number}1">1000 to 1200 hours</label>
      <button type="button" class="btn btn-outline-dark" id="${number}1" onclick="storeSlot(${number}1)">Select</button>
    </div>
  </li>
  <li class="list-group-item">
    <div>
      <label id="tab${number}2">1200 to 1400 hours</label>
      <button type="button" class="btn btn-outline-dark" id="${number}2" onclick="storeSlot(${number}2)">Select</button>
    </div>
  </li>
  <li class="list-group-item">
    <div>
      <label id="tab${number}3">1400 to 1600 hours</label>
      <button type="button" class="btn btn-outline-dark" id="${number}3" onclick="storeSlot(${number}3)">Select</button>
    </div>
  </li>
  <li class="list-group-item">
    <div>
      <label id="tab${number}4">1600 to 1800 hours</label>
      <button type="button" class="btn btn-outline-dark" id="${number}4" onclick="storeSlot(${number}4)">Select</button>
    </div>
  </li>
  <li class="list-group-item">
    <div>
      <label id="tab${number}5">1800 to 2000 hours</label>
      <button type="button" class="btn btn-outline-dark" id="${number}5" onclick="storeSlot(${number}5)">Select</button>
    </div>
</li>
  <li class="list-group-item">
    <div>
      <label id="tab${number}6">2000 to 2200 hours</label>
      <button type="button" class="btn btn-outline-dark" id="${number}6" onclick="storeSlot(${number}6)">Select</button>
    </div>
  </li>
</ul>
  `)
}

// ******************************
// DISPLAY SLOT SELECTION AND ENABLE BUTTONS
// ******************************
function storeSlot(number){
  temp = $("#tab"+ number).text();
  $("#slots").html("")
  $("#product").html(`<h4>Your delivery is booked for between ${temp} on ${postDay}.</h4>

  <p>Now, start searching for items using the bar above.</p>

  <hr>
  
  <h4>Are you interested in this weeks five <u>sale</u> items:</h4>
  `);
  $("#submit").prop("disabled", false);
  $("#checkout").prop("disabled", false);
  $("#redeem").prop("disabled", false);
  onSaleDisplay();
}
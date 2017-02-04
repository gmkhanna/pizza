// Back-END



function Pizza(size, sauce, cheese, meat, veg, special) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat = meat;
  this.veg = veg;
  this.special = special;
  console.log(this.meat);
  console.log(this.veg);
  console.log(this.special);
};

// Pizza.meat = [" Pepperoni", " Chicken", " Meatball"]


// This is mainly a prototype test
Pizza.prototype.Desc = function() {
  return this.size + this.sauce + this.cheese;
}

Pizza.prototype.SizePrice = function(sizeChoice) {
  var basePrice;
  if (this.size === "Small") {
    return basePrice = 5;
  } else if (this.size === "Medium") {
    return basePrice = 10;
  } else {
    return basePrice = 15;
  }
}


function Name(first, last) {
  this.first = first;
  this.last = last;
};

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
};

function fullInfo(first, last, street, city, state) {
  first = Name.first;
  last = Name.last;
  street = Address.street;
  city = Address.city;
  state = Address.state;
  return Name.first + Name.last + Address.street + Address.city + Address.state;
}


// Front End

$(document).ready(function() {

  $("form#mainOrderForm").submit(function(event) {
    event.preventDefault();

    //Pizza Area order value info

    //This is just to test
    // var testPizza = new Pizza("large", "mar", "moz")
    //
    // $("#size").text(testPizza.size);
    // $("#sauce").text(testPizza.sauce);
    // $("#cheese").text(testPizza.cheese);

    var sizeChoice = $("#newSize").val();
    var sauceChoice = $("#newSauce").val();
    var cheeseChoice = $("#newCheese").val();
    var meatChoice = $('input:checkbox:checked.meat').map(function() {
      return this.value;
    }).get();
    var vegChoice = $('input:checkbox:checked.veg').map(function() {
      return this.value;
    }).get();
    var specialChoice = $('input:checkbox:checked.special').map(function() {
      return this.value;
    }).get();
    var newOrder = new Pizza(sizeChoice, sauceChoice, cheeseChoice, meatChoice, vegChoice, specialChoice);

    $("#size").text(sizeChoice);
    $("#sauce").text(sauceChoice);
    $("#cheese").text(cheeseChoice);
    $("#meat").text(meatChoice);
    $("#veggie").text(vegChoice);
    $("#special").text(specialChoice);

    $("#totalPrice").text(newOrder.SizePrice());


    //Name Area input info
    // var first = $("#new-first-name").val();
    // var last = $("#new-last-name").val();
    // var street = $("#new-street").val();
    // var city = $("#new-city").val();
    // var state = $("#new-state").val();
    //
    //   $(".confirmFullName").text(fullInfo());
    //   console.log(fullInfo());



  });
});

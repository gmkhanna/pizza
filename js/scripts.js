// Back-END

function Pizza(size, sauce, cheese) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
};

Pizza.prototype.Desc = function() {
  return this.size + this.sauce + this.cheese;
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

// var newOrder = new Pizza()
var sizeChoice = $("#newSize").val();
var sauceChoice = $("#newSauce").val();
var cheeseChoice = $("#newCheese").val();
$("#size").text(sizeChoice);
$("#sauce").text(sauceChoice);
$("#cheese").text(cheeseChoice);





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

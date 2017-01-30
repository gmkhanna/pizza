// Back-END


function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.location = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return ("<li>" + this.street + "</li>" + "<li>" + this.city + "</li>" + "<li>" + this.state + "</li>");
}

// Pizza.meatOpt.prototype.meatOpt = function() {
//   return $(".meat input:checked").each(function() {
//     newPizza.meatOpt.push($(this).val());
//   });
// }

Pizza.prototype.PizzaOrder = function() {
  var meat = $('input:checkbox:checked.meat').map(function() {
    return this.value;
  }).get();
  var veg = $('input:checkbox:checked.veg').map(function() {
    return this.value;
  }).get();
  var special = $('input:checkbox:checked.special').map(function() {
    return this.value;
  }).get();
  this.meatOpt = Array.from(meat);
  console.log(meat);
  console.log(this.meatOpt);
  return (this.size + ", " + this.sauce + " , " + this.cheese + ", " + this.meatOpt)
}

// function Pizza(size, sauce, cheese, meat, veg, special) {
//   this.size = size;
//   this.sauce = sauce;
//   this.cheese = cheese;
//   this.meatOpt = [];
//   this.vegOpt = [];
//   this.specialOpt = [];
// }

function Pizza(size, sauce, cheese) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meatOpt = [];
  this.vegOpt = [];
  this.specialOpt = [];
}


Pizza.meat = ["Pepperoni", "Chicken", "Meatball"]
Pizza.vegOpt = ["Broccoli", "Pineapple", "Red Onions", "Yellow Bell Pepper", "Tofu", "Kale", "Mushrooms", "Lemon Zest"];
Pizza.specialOpt = ["Portobello", "Feta", "Prosciutto", "BBQ Chicken", "Thai Chicken", "White Truffle", "Avocado"]

var classico = new Pizza(15, "Large", "Marinara", "Mozzarella")
classico.veg = ["Basil", "Tomato"]
var tailgate = new Pizza(19, "Large", "Marinara", "Cheddar")
tailgate.meat = ["Pepperoni", "Meatball,"]
tailgate.special = ["BBQ Chicken"]
var funkyFungus = new Pizza(17, "Large", "Garlic Fettuccine", "Mozzarella/Bleu", "Mushroom")
funkyFungus.special = ["Portobello", "Feta"]
var inflewenza = new Pizza(19, "Large", "Garlic Fettuccine", "Mozzarella", "Chicken")
inflewenza.veg = ["Red Onions", "Garlic"]
inflewenza.special = ["White Trufle"]
var skinnyChick = new Pizza(18, "Large", "Olive Oil", "Mozzarella/Bleu")
skinnyChick.veg = ["Kale", "Broccoli", "Tofu", "Lemon Zest"]
skinnyChick.special = ["Avocado"]
var yellowFever = new Pizza(17, "Large", "Olive Oil", "Cheddar")
yellowFever.veg = "Pineapple, Yellow Bell Pepper"
yellowFever.special = ["Thai Chicken"]


// Front-END
$(document).ready(function() {
  $("form#mainOrderForm").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("#new-first-name").val();
    var inputtedLastName = $("#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    var inputtedStreet = $("#new-street").val();
    var inputtedCity = $("#new-city").val();
    var inputtedState = $("#new-state").val();
    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState)


    var inputtedSize = $("#pizzaSize").val();
    var inputtedSauce = $("#pizzaSauce").val();
    var inputtedCheese = $("#pizzaCheese").val();
    var customPizza = new Pizza(inputtedSize, inputtedSauce, inputtedCheese)

    $("#size").text(customPizza.PizzaOrder());
    console.log(customPizza.PizzaOrder());
    $(".confirmFullName").text(newContact.fullName());
    $(".confirmAddress").append(newAddress.fullAddress());


      $("#new-first-name").val("");
      $("#new-last-name").val("");


    // });

  });
});

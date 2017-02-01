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

Pizza.prototype.PizzaOrder = function(size, sauce, cheese, meatOpt, vegOpt, specialOpt) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meatOpt = [];
  this.vegOpt = [];
  this.specialOpt = [];
  return ("<li> Size: " + this.size + "</li>" + "<li> Sauce: " + this.sauce + "</li>" + "<li> Cheese: " + this.cheese + "</li>" + "<li> Meat: " + this.meatOpt + "</li>" + "<li> Veggies: " + this.vegOpt + "</li>" + "<li> Special Toppings: " + this.specialOpt + "</li>")
}

function Pizza(size, sauce, cheese) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meatOpt = [];
  this.vegOpt = [];
  this.specialOpt = [];
}

Pizza.meat = [" Pepperoni", " Chicken", " Meatball"]
Pizza.vegOpt = [" Broccoli", " Pineapple", " Red Onions", " Yellow Bell Pepper", " Tofu", " Kale", " Mushrooms", " Lemon Zest"];
Pizza.specialOpt = [" Portobello", " Feta", " Prosciutto", " BBQ Chicken", " Thai Chicken", " White Truffle", " Avocado"]

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


    var inputtedSizePrice = parseInt($("#pizzaSize").val());
    var inputtedSauce = $("#pizzaSauce").val();
    var inputtedCheese = $("#pizzaCheese").val();
    var checkedMeats = $('input:checkbox:checked.meat').map(function() {
      return this.value;
    }).get();
    var checkedVeg = $('input:checkbox:checked.veg').map(function() {
      return this.value;
    }).get();
    var checkedSpecial = $('input:checkbox:checked.special').map(function() {
      return this.value;
    }).get();
    var newPizza = new Pizza(inputtedSizePrice, inputtedSauce, inputtedCheese, checkedMeats, checkedVeg, checkedSpecial)

    $(".pizzaConstruction").append(newPizza.PizzaOrder());
    $(".confirmFullName").text(newContact.fullName());
    $(".confirmAddress").append(newAddress.fullAddress());


      $("#new-first-name").val("");
      $("#new-last-name").val("");


    // });

  });
});

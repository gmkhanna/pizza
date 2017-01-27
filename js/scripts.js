// Back-END

function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.location = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

var dude = new Contact("Happy", "Dude");
var home = new Address("123 A", "G", "WA");
dude.location.push(home);


function Pizza(price, size, sauce, cheese, meat, veg, special) {
  this.price = price;
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat = [];
  this.veg = [];
  this.special = [];
}


var classico = new Pizza(15, "Large", "Marinara", "Mozzarella")
classico.veg = ["Basil", "Tomato"]
var tailgate = new Pizza(19, "Large", "Marinara", "Cheddar")
tailgate.meat = ["Pepperoni", "Meatball"]
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
  $("form#newContact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    var inputted

    $(".confirmFullName").empty().append(newContact.firstName);

    $("#new-first-name").val("");
    $("#new-last-name").val("");
  });

});

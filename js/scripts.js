// Back-END

function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.address = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

function Pizza(price, size, sauce, cheese, meat, veg, special) {
  this.price = price;
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat = [];
  this.veg = [];
  this.special = [];
}


var classico = new Pizza("$15" "Large", "Marinara", "Mozzarella")
classico.veg = ["Basil", "Tomato"]
var trailer = new Pizza("$19", "Large", "Marinara", "Cheddar")
trailer.meat = ["Pepperoni", "Meatball"]
trailer.special = ["BBQ Chicken"]
var funkyFungus = new Pizza("$17", "Large", "Garlic Fettuccine", "Mozzarella/Bleu", "Mushroom")
funkyFungus.special = ["Portobello", "Feta"]
var inflewenza = new Pizza("$16", "Large", "Garlic Fettuccine", "Mozzarella", "Chicken")
inflewenza.veg = ["Red Onions", "Garlic"]
inflewenza.special = ["White Trufle"]
var skinnyChick = new Pizza("$19", "Large", "Olive Oil", "Mozzarella/Bleu")
skinnyChick.veg = ["Kale," "Broccoli," "Tofu", "Lemon Zest"]
skinnyChick.special = ["Avocado"]
var yellowFever = new Pizza("$17", "Large", "Olive Oil", "Cheddar")
yellowFever.veg = "Pineapple, Yellow Bell Pepper"
yellowFever.special = ["Thai Chicken"]









// Front-END

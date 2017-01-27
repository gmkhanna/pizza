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

function Pizza(size, sauce, cheese, meat, veg, special1, special2) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat = [];
  this.veg = [];
  this.special1 = special1;
  this.special2 = special2;
}

var classico = new Pizza("Your Choice", "Marinara", "Mozzarella", "none", "Basil", "none", "none")
var trailer = new Pizza("Your Choice", "Marinara", "Cheddar", "Pepperoni, Meatball", "none", "BBQ Chicken")
var funkyFungus = new Pizza("Your Choice", "Garlic Fettuccine", "Mozzarella/Bleu", "none", "Mushroom", "Portobello", "Feta")
var inflewenza = new Pizza("Your Choice", "Garlic Fettuccine", "Mozzarella", "Chicken", "Red Onions, Garlic", "none", "White Trufle")
var skinnyChick = new Pizza("Your Choice", "Olive Oil", "Mozzarella/Bleu", "none", "Kale, Broccoli, Tofu", "none", "Avocado")
var yellowFever = new Pizza("Your Choice", "Olive Oil", "Cheddar", "none", "Pineapple, Yellow Bell Pepper,", "none", "Thai Chicken")










// Front-END

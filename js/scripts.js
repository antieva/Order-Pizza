// Business logic.

function Stuff() {
  this.choices = [];
}

//var veggies = new Stuff();
//var meet = new Stuff();

function Pizza(size, crust) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
  this.cheese = new Stuff;
}

// Prototype function tocalculate pizza cost.
Pizza.prototype.cost = function() {
  var price = parseInt(this.size) + this.toppings.length + parseInt(this.crust) + (this.cheese.length * 0.30);
  return price;
}

// UI logic.

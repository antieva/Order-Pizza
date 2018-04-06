// Business logic.

function Pizza(size, crust) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
  this.cheese = [];
}

// Prototype function tocalculate pizza cost.
Pizza.prototype.cost = function() {
  var price = parseInt(this.size) + this.toppings.length + parseInt(this.crust) + (this.cheese.length * 0.30);
  return price;
}

// UI logic.
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var inputSize = $("select#size").val();
    if(inputSize == '6') {
      $("#pizzaSize").text("small");
    } else if(inputSize == '8') {
      $("#pizzaSize").text("medium");
    } else {
      $("#pizzaSize").text("large");
    }


    var inputCrust = $("select#crust").val();
    if(inputCrust == '0') {
      $("#pizzaCrust").text("original");
    } else {
      $("#pizzaCrust").text("gluten-free");
    }


    var veggies = [];
    $("input:checkbox[name=veggies]:checked").each(function(){
       var choice = $(this).val();
       console.log(choice); //test
       veggies.push(choice);
       $('#pizzaToppings').append("<li>" + choice + "</li>");
     });

    var meat = [];
    $("input:checkbox[name=meat]:checked").each(function(){
      var choice = $(this).val();
      meat.push(choice);
      $('#pizzaToppings').append("<li>" + choice + "</li>");
    });

    var sauce = [];
    $("input:checkbox[name=sauce]:checked").each(function(){
        var choice = $(this).val();
        sauce.push(choice);
        $('#pizzaSauce').append("<li>" + choice + "</li>");
    });
    if(sauce.length != 0) {
      $("#pizza-sauce").text("Sauce:");
    }

    var cheese = [];
    $("input:checkbox[name=cheese]:checked").each(function(){
        var choice = $(this).val();
        cheese.push(choice);
        $('#pizzaCheese').append("<li>" + choice + "</li>");
    });
    if(cheese.length != 0) {
      $("#pizza-cheese").text("Cheese:");
    }

    var newPizza = new Pizza(inputSize, inputCrust);
    newPizza.cheese = cheese;
    if(veggies.length != 0) {
      $("#pizza-toppings").text("Toppings:");
      newPizza.toppings.push(veggies);
    }
    if(meat.length != 0) {
      newPizza.toppings.push(meat);
    };
    console.log(newPizza);// test

    var price = newPizza.cost().toFixed(2);
    console.log(price); // test
    $("#price").text(price);

    $(".output").show();

  })
})

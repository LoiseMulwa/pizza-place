$(document).ready(function() {
    $(".table").hide();
    $(".button").hide();
    $("#checkout").hide();
    $("#infoyes").hide();
    $("#infono").hide();
    $("#comp").hide();
    $("form").hide();
    $("#msg").hide();
    $("#deliv").hide();
    $("#rece").hide();

    $("#btn").click(function() {
        var pizzaSize = $(".size option:selected").val();
        var pizzaTopping = $(".toppings option:selected").val();
        var pizzaCrust = $(".crust option:selected").val();
        var total = parseInt(pizzaSize) + parseInt(pizzaTopping) + parseInt(pizzaCrust );
        var order = 1;
        var grandTotal = 0;


    $(".table").show();
    $("#checkout").show();
    $(".button").show();
    $("#btn").hide();

    $("#size").html($(".size option:selected").text() + " - " + pizzaSize);
    $("#toppings").html($(".toppings option:selected").text() + " - " + pizzaTopping);
    $("#crust").html($(".crust option:selected").text() + " - " + pizzaCrust);
    $("#total").html(total);

    
     });
   

  











$(document).ready(function(){ 
// $("#btn").click(function() {
//     let pizzaSize=$(".round1 option:selected").value();
//     let pizzaTopping=$(".round2 option:selected").value();
//     let pizzaCrust=$(".round3 option:selected").value();
//     let total = parseInt(pizzaSize) + parseInt(pizzaTopping) + parseInt(pizzaCrust);
//     let order = 1;
//     let Amount = 0;

//     $(".table").show();


    // $(".additional-buttons").show();
    // $(".btn.order").hide();

    // $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
    // $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
    // $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
    // $("#total").html(total);


});
 });












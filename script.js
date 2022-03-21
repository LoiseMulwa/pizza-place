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
        var total = parseInt(pizzaSize) + parseInt(pizzaTopping) + parseInt(pizzaCrust);
        var order = 1;
        var Amount= 0;


    $(".table").show();
    $("#checkout").show();
    $(".button").show();
    $("#btn").hide();

    $("#size").html($(".size option:selected").text() + " - " + pizzaSize);
    $("#toppings").html($(".toppings option:selected").text() + " - " + pizzaTopping );
    $("#crust").html($(".crust option:selected").text() + " - " + pizzaCrust);
    $("#total").html(total);


    function myPizzar(size, toppings, crust, total, orderNo){
        this.size = size;
        this.toppings = toppings;
        this.crust = crust;
        this.total = total;
        this.orderNo = orderNo;
    }

    $('.button').click(function() {
        var pizzaSize = $(".size option:selected").val();
        var pizzaTopping = $(".toppings option:selected").val();
        var pizzaCrust= $(".crust option:selected").val();
        var total = parseInt(pizzaSize) + parseInt(pizzaTopping) + parseInt(pizzaCrust);
        order = order + 1;
        Amount = Amount + total;

        var newPizad = new myPizzar(pizzaSize, pizzaTopping, pizzaCrust, total, order);

        var newRow = '<tr><th scope="row">' + newPizad.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizad.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizad.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizad.crust + '</td><td id="total">' + newPizad.total + '</td></tr>'
        $("#myplace").append(newRow);

 });
 $("#checkout").click(function(){
    $(".button").hide();
    $("#checkout").hide();
    $("#msg").show();
    $("#infoyes").show();
    $("#infono").show();
    
    Amount= Amount + total;

    $("#msg").html(Amount);
 });

 $("#infoyes").click(function() {
    $("#deliv").hide();
    $("#infoyes").hide();
    $("#infono").hide();
    $("form").show();
    $("#msg").html(grandTotal + 200);
  });

  $("#infono").click(function() {
    $("#deliv").hide();
    $("#infoyes").hide();
    $("#infono").hide();
    $("form").show();
  })

  

  $("#comp").click(function() {
    var location = $("#area").val();
    var name=$("#name").val();
    $("#rece").show();
    $("form").hide();
    $("rece span").html(location);
  });

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












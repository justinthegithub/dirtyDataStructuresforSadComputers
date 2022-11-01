let button =function() {
  $("#demo3").html(`${time.removeHead()}`);
}

$(document).ready(function() {
  $("#purpose").html("This is such a good app showcasing the linked list data structure!");
  $("#demo2").html(`Hello, World! ${atest}`);
  $("#removeHead").click(button)


});
$("#removedHead").click(button)



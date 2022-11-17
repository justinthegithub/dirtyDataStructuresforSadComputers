let button =function() {
  $("#demo3").html(`${time.removeHead()}`);
}

$(document).ready(function() {
  $("#purpose").html("This is such a good app showcasing the linked list data structure!");
  $("#demo2").html(`A Linked List <br> ${atest}`);
  $("#removeHead").click(button)


});
$("#removedHead").click(button)



let nodeInput = function(){
  let userData = $("#node").val();
  let userNode = new Node(userData)
  $("#demo4").html(`You have created a new node ${userNode.data}. Althouh there isn't a lot you can do with it on your own.`)
  time.addToHead(`<b>[Node + ${userNode.data}]</b>`)
  $("#demo2").html(`${time.returnList()}`)

}

let value = 10
let removeHead =function() {
  let recent = time.removeHead();

  $("#demo2").html(`${time.returnList()}`)
  $("#demo3").html(`Ahhhh! How sweet  ${recent} is`)
  value--;
  return value
;
}

let returnHead = function (lastHead) {



  if (value > 8){
    time.addToHead(`<b>["undefined"]</b>`)
    value ++;
  }
  else {
    time.addToHead(`<b>[Node + ${value}]</b>`)
    value ++;
  }
  $("#demo2").html(`${time.returnList()}`)
  $("#demo3").html("")
  return value;

};




$(document).ready(function() {
  $("#purpose").html("This is such a good app showcasing the linked list data structure!");
  $("#demo4").html("");
  $("#demo2").html(` <br> ${exampleList}`);
  $("#demo3").html("");

  $("#removeHead").click(removeHead)
  $("#returnHead").click(returnHead)
  $("#nodeInput").click(nodeInput);

});  $("#demo2").html(`A Linked List <br> ${exampleList}`);



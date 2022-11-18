

let time = new LinkedList();
let node ='';

for (let i = 0; i<9; i++)
{
  node = time.addToHead(`<b>[Node + ${i}]</b>`);

}
console.log(time.printList("present", "past"));
let exampleList = time.returnList();
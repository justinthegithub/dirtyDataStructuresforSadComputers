
let time = new LinkedList();
let node ='';

for (let i = 0; i<10; i++)
{
  node = time.addToHead(`<b>[Node + ${i}]</b><br>`);

}
console.log(time.printList("present", "past"));
let atest =time.returnList();
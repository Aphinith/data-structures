var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.counter = 0;

list.addToTail = function(value){
  console.log('addToTail called!');
  var newNode = Node(value);

  if (!list.head) {
    list.head = newNode;
    list.tail = newNode;
  }
  if (list.tail) {
    list.tail = newNode;
  }
};

list.removeHead = function(){
  console.log('removeHead called!');
  if (list.head) {
    var removedHead = list.head;
    list.head = list.tail;
    console.log('after removing, list.head is now:', list.head);
    return removedHead.value;
  }
};

list.contains = function(target){

};

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.counter = 0;

list.addToTail = function(value){
  console.log('addToTail called!');
  var newNode = Node(value);

  if (!list.tail) {
    list.head = newNode;
    list.tail = newNode;
  } else {
    if (!list.head.next) {
      list.head.next = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;
  }
};

list.removeHead = function(){
  if (list.head) {
    var removedHead = list.head;
    list.head = list.head.next;
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

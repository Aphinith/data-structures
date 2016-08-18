var Tree = function(value){
  var newTree = {};
  // create property named value
  newTree.value = value;
  // use underscore to extend newTree with treeMethods
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me
// console.log(newTree)
  return newTree;
};

  // your code here
  // newTree.children = null;  // fix me

var treeMethods = {};

treeMethods.addChild = function(value){
  //create children trees and push into newchildren array
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var result = false;
  var search = function(mainRoot) {
    if (mainRoot.value === target) {
      result = true;
    } else {
      _.each(mainRoot.children, function(nodes){
        search(nodes);
      });
    }
  }

  search(this)
  return result
};


/*
 * Complexity: What is the time complexity of the above functions?
 // Logarithm
 */

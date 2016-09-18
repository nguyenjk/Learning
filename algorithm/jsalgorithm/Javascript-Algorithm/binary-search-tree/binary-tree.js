/*

  insert(key): This inserts a new key in the tree
  search(key): This searches for the key in the tree and returns true if it exists and returns false if the node does not exist
  inOrderTraverse: This visits all nodes of the tree using in-order traverse
  preOrderTraverse: This visits all nodes of the tree using pre-order traverse
  postOrderTraverse: This visits all nodes of the tree using post-order traverse
  min: This returns the minimum value/key in the tree
  max: This returns the maximum value/key in the tree
  remove(key): This removes the key from the tree

*/
function BinarySearchTree() {

  var Node = function(key){
      this.key = key;
      this.left = null;
      this.right = null;
  };

  var root = null;

  var insertNode = function(node, newNode){
    if (newNode.key < node.key){
      if (node.left === null){
          node.left = newNode;
      } else {
          insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null){
          node.right = newNode;
      } else {
          insertNode(node.right, newNode);
      }
    }
  };

  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  var preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
    }
  };

  var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
    }
  };

  var minNode = function (node) {
      if (node){
          while (node && node.left !== null) {
              node = node.left;
          }

          return node.key;
      }
      return null;
  };

  var maxNode = function (node) {
      if (node){
          while (node && node.right !== null) {
              node = node.right;
          }

          return node.key;
      }
      return null;
  };

  var searchNode = function(node, key){

    if (node === null){
        return false;
    }
    if (key < node.key){
        return searchNode(node.left, key);

    } else if (key > node.key){
        return searchNode(node.right, key);

    } else {
        return true;
    }
  };

  var removeNode = function(node, key){

      if (node === null){
          return null;
      }
      if (key < node.key){
          node.left = removeNode(node.left, key);
          return node;

      } else if (key > node.key){
          node.right = removeNode(node.right, key);
          return node;

      } else {
          if (node.left === null && node.right === null){
              node = null;
              return node;
          }
          if (node.left === null){
              node = node.right;
              return node;

          } else if (node.right === null){
              node = node.left;
              return node;
          }

          var aux = findMinNode(node.right);
          node.key = aux.key;
          node.right = removeNode(node.right, aux.key);
          return node;
      }
  };
  this.insert = function(key){

    var newNode = new Node(key); //{1}

    if (root === null){ //{2}
        root = newNode;
    } else {
        insertNode(root,newNode); //{3}
    }
  };

  this.inOrderTraverse = function(callback){
    inOrderTraverseNode(root, callback); //{1}
  };

  this.preOrderTraverse = function(callback){
      preOrderTraverseNode(root, callback);
  };

  this.postOrderTraverse = function(callback){
      postOrderTraverseNode(root, callback);
  };

  this.min = function() {
      return minNode(root); //{1}
  };

  this.max = function(){
    return maxNode(root);
  }

  this.search = function(key){
    return searchNode(root, key); //{1}
  };

  this.remove = function(key){
      root = removeNode(root, key); //{1}
  };

}
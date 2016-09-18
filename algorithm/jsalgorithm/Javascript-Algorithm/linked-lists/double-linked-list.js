function linkedLists(){

  // node object or root node
  function Node(data){
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  var length = 0;
  var head = null;
  var tail = null;

  // append function is used to add the new element
  // to the end of the list.
  this.append = function(element){
    var newElement = new Node(element);

    if(head){
      var currentNode = head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = newElement;
    }
    else{
      head = newElement;
    }
    length++;
  };
  this.insert = function(position, element){
    var newNode = new Node(element);
    var index=0;

    if(position >=0 && position < length){
      if(position === 0){
        newNode.next = head
        currentNode = newNode;
      }
      else{
        var currentNode = head;
        var previousNode;
        while(index <position){
          index++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = newNode;
        newNode.next = currentNode;

      }

      length++;
      return true;
    }
    else{
      return false;
    }

  };
  this.removeAt = function(position){
    var currentNode = head;
    var previousNode, index = 0;
    if(position >= 0 < position < length){
      if(position === 0){
        head = currentNode.next;
      }
      else{
        while(index++ < position){
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
      }
      length--;
      return currentNode.element;
    }
    else{
      return null;
    }

  };
  this.remove = function(element){
    var newNode = new Node(element);
    var index=0;
    var currentNode = head;

    while(index++ < length){
      if(currentNode.element === element){
        if(currentNode === head){
          head = currentNode.next;
          previousNode = head;
          currentNode = head;
        }
        else{
          previousNode.next = currentNode.next;
        }
      }
      else{
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }

  };
  this.indexOf = function(element){
    var indexArray = [];
    var index = 0;
    var previousNode , currentNode = head;
    while(index++<length){
      if(currentNode.element === element){
        indexArray.push(index);
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    return indexArray;
  };
  this.isEmpty = function() {
    return length === 0 ;
  };
  this.size = function() {
    return length;
  };
  this.toString = function(){

  };
  this.print = function(){};
}